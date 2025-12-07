import type { Meta } from '../types';
const BASE = 'http://localhost:3000/meta';

export async function getMeta(): Promise<Meta> {
  const r = await fetch(BASE);
  return r.json();
}

export async function updateMeta(id:number, patch: Partial<Meta>) {
  const r = await fetch(`${BASE}/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify(patch) });
  return r.json();
}
