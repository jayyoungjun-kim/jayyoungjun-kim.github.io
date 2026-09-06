import test from 'node:test';
import assert from 'node:assert/strict';
import {IDBFactory} from 'fake-indexeddb';
import {BrowserStore} from '../lib/storage.js';
import {LocalAdmin} from '../lib/service.js';
import {fittedSize,optimizeImage} from '../admin/image-optimizer.js';
import {GitHub} from '../lib/github.js';
test('image sizes preserve proportions and never upscale; animation bytes are kept',async()=>{
 assert.deepEqual(fittedSize(4000,2000),{width:2560,height:1280});
 assert.deepEqual(fittedSize(1000,4000),{width:640,height:2560});
 assert.deepEqual(fittedSize(320,180),{width:320,height:180});
 for(const [type,signature]of [['image/gif','GIF89a'],['image/png','acTL'],['image/webp','ANIM']]){
  const file=new Blob([signature],{type});assert.equal((await optimizeImage(file)).file,file);
 }
 await assert.rejects(optimizeImage({size:41*1024*1024}),/40MB/);
});
test('library persists uploads, merges remote images and refuses deletion of referenced files',async()=>{
 const store=new BrowserStore(new IDBFactory()),admin=new LocalAdmin({},'',{store});
 const files=[],writes=[],name='11111111-1111-4111-8111-111111111111.webp';
 let source='<div></div>';
 admin.github={media:async()=>({files,catalog:{}}),pages:async()=>({head:{sha:'head'},pages:[{path:'work.html'}]}),file:async()=>({source}),
 publishAsset:async(...args)=>{writes.push(args);return {sha:'new'};}};
 await store.mutate('uploads',name,()=>({name,label:'Photo.webp',blob:new Blob(['RIFF0000WEBP'],{type:'image/webp'})}));
 let result=await admin.request('/api/media');assert.equal(result.files[0].published,false);
 await admin.request('/api/media',{method:'POST',body:{name}});assert.equal(writes[0][3],'Photo.webp');
 files.push({path:'assets/uploads/'+name,size:12});
 result=await admin.request('/api/media');assert.equal(result.files.length,1);assert.equal(result.files[0].published,true);
 source='/assets/uploads/'+name;
 await assert.rejects(admin.request('/api/media',{method:'DELETE',body:{name}}),/work.html/);
 source='';
 await store.save({page:'draft.html',source:'/assets/uploads/'+name},{revision:0});
 await assert.rejects(admin.request('/api/media',{method:'DELETE',body:{name}}),/초안/);
 const draft=await store.get('drafts','draft.html');await store.remove('draft.html',draft);
 await admin.request('/api/media',{method:'DELETE',body:{name}});
 assert.equal(writes.at(-1)[1],null);assert.equal(await store.get('uploads',name),null);
 await assert.rejects(admin.request('/api/media',{method:'DELETE',body:{name:'../index.html'}}));
});
test('asset and library metadata publish atomically without force and preserve other labels',async()=>{
 const gh=new GitHub({GITHUB_BRANCH:'master'}),calls=[];
 gh.head=async()=>({sha:'head',tree:'tree'});gh.mediaCatalog=async()=>({'other.webp':{label:'Other'}});
 gh.request=async(path,method,body)=>{calls.push({path,method,body});return {sha:'new'};};
 await gh.publishAsset('11111111-1111-4111-8111-111111111111.webp',new Uint8Array([1]),undefined,'Photo.webp');
 const tree=calls.find(c=>c.path==='/git/trees').body.tree;
 assert.equal(tree.length,2);
 assert.equal(JSON.parse(tree[1].content)['other.webp'].label,'Other');
 assert.equal(calls.at(-1).body.force,false);
});
test('MP4 upload is listed, published unchanged and protected while used',async()=>{
 const store=new BrowserStore(new IDBFactory()),admin=new LocalAdmin({},'',{store});
 let input,publishedSource='';
 admin.github={media:async()=>({files:[],catalog:{}}),pages:async()=>({head:{sha:'h'},pages:[{path:'work.html'}]}),file:async()=>({source:publishedSource}),
 publishAsset:async(...args)=>{input=args;return {sha:'s'};}};
 const file=new File(['0000ftypisom0000'],'Clip.mp4',{type:'video/mp4'});
 const upload=await admin.request('/api/uploads',{method:'POST',body:file});
 assert.match(upload.name,/\.mp4$/);
 assert.equal((await admin.request('/api/media')).files[0].label,'Clip.mp4');
 await admin.request('/api/media',{method:'POST',body:{name:upload.name}});
 assert.deepEqual(input[1],new Uint8Array(await file.arrayBuffer()));
 assert.equal(input[3],'Clip.mp4');
 publishedSource='<video src="'+upload.url+'"></video>';
 await assert.rejects(admin.request('/api/media',{method:'DELETE',body:{name:upload.name}}),/work.html/);
 await assert.rejects(admin.request('/api/uploads',{method:'POST',body:new Blob(['invalid'],{type:'video/mp4'})}),/파일만/);
});
