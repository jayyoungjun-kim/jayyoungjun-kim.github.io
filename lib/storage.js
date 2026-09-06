import { requireValue } from './errors.js';

export class BrowserStore {
  constructor(indexedDB = globalThis.indexedDB, name = 'jay-portfolio-admin-v1') {
    this.ready = new Promise((resolve, reject) => {
      requireValue(indexedDB, 503, '이 브라우저에서는 초안 저장을 사용할 수 없습니다. 일반 브라우저로 열어 주세요.');
      const request = indexedDB.open(name, 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore('drafts', { keyPath:'page' });
        request.result.createObjectStore('uploads', { keyPath:'name' });
      };
      request.onsuccess = () => { request.result.onversionchange = () => request.result.close(); resolve(request.result); };
      request.onerror = () => reject(new Error('브라우저 저장 공간을 열 수 없습니다. 저장 설정을 확인해 주세요.'));
      request.onblocked = () => reject(new Error('다른 관리자 탭을 닫은 뒤 다시 접속해 주세요.'));
    });
  }
  async get(store, key) {
    const db = await this.ready;
    return new Promise((resolve,reject) => {
      const req = db.transaction(store).objectStore(store).get(key);
      req.onsuccess = () => resolve(req.result || null); req.onerror = () => reject(req.error);
    });
  }
  async all(store) {
    const db = await this.ready;
    return new Promise((resolve,reject) => {
      const req = db.transaction(store).objectStore(store).getAll();
      req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error);
    });
  }
  async mutate(store, key, change) {
    const db = await this.ready;
    return new Promise((resolve,reject) => {
      const tx = db.transaction(store,'readwrite'), table=tx.objectStore(store), read=table.get(key);
      let result, failure;
      read.onsuccess = () => {
        try { result=change(read.result || null); if(result===null)table.delete(key);else table.put(result); }
        catch(e) { failure=e;tx.abort(); }
      };
      tx.oncomplete=()=>resolve(result);
      tx.onabort=()=>reject(failure || new Error('초안을 저장하지 못했습니다. 브라우저 저장 용량을 확인해 주세요.'));
      tx.onerror=()=>{};
    });
  }
  save(row, expected) {
    return this.mutate('drafts',row.page,old => {
      requireValue(expected.revision === 0 ? !old : old?.draftId === expected.draftId && old?.revision === expected.revision,
        409,'다른 창에서 초안이 변경되었습니다. 다시 불러와 주세요.');
      return { ...row, draftId:old?.draftId || crypto.randomUUID(),revision:(old?.revision || 0)+1,updatedAt:new Date().toISOString() };
    });
  }
  remove(page, expected) {
    return this.mutate('drafts',page,old=> {
      requireValue(old?.draftId === expected.draftId && old?.revision === expected.revision,409,'초안이 변경되었습니다. 다시 불러와 주세요.');
      return null;
    });
  }
}
