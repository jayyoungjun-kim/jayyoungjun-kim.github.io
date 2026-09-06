export function fittedSize(width,height,max=2560){
 const scale=Math.min(1,max/Math.max(width,height));
 return {width:Math.max(1,Math.round(width*scale)),height:Math.max(1,Math.round(height*scale))};
}
export async function optimizeImage(file){
 if(file.size>40*1024*1024)throw new Error('원본 파일은 40MB 이하로 선택해 주세요.');
 if(!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type))return {file,note:'원본 유지'};
 const bytes=new Uint8Array(await file.arrayBuffer());
 // Preserve animated GIF, APNG and WebP rather than silently flattening them.
 const header=new TextDecoder('latin1').decode(bytes);
 const marker=s=>header.includes(s);
 if(file.type==='image/gif'||file.type==='image/png'&&marker('acTL')||file.type==='image/webp'&&marker('ANIM'))return {file,note:'움직이는 이미지 · 원본 유지'};
 const bitmap=await createImageBitmap(file);
 try{
  if(bitmap.width*bitmap.height>64000000)throw new Error('이미지는 6,400만 화소 이하로 선택해 주세요.');
  const size=fittedSize(bitmap.width,bitmap.height),canvas=document.createElement('canvas');
  canvas.width=size.width;canvas.height=size.height;
  canvas.getContext('2d').drawImage(bitmap,0,0,size.width,size.height);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.88));
  if(!blob||blob.type!=='image/webp'||blob.size>=file.size)return {file,note:'이미 최적화된 이미지 · 원본 유지'};
  const output=new File([blob],file.name.replace(/\.[^.]+$/,'')+'.webp',{type:blob.type});
  return {file:output,note:Math.round((1-blob.size/file.size)*100)+'% 용량 절감',originalSize:file.size};
 }finally{bitmap.close();}
}
