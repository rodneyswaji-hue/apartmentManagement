import type { Receipt } from '../types';
const BASE = 'http://localhost:3000/receipts';

export async function addReceipt(rdata: Receipt): Promise<Receipt> {
  const r = await fetch(BASE, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(rdata) });
  return r.json();
}

export async function getReceipts(): Promise<Receipt[]> {
  const r = await fetch(BASE);
  return r.json();
}

export async function getReceiptsForHouse(houseId:number): Promise<Receipt[]> {
  const r = await fetch(`${BASE}?houseId=${houseId}&_sort=date&_order=desc`);
  return r.json();
}
