import type { User } from '../types';
const BASE = 'http://localhost:3000/users';

export async function getUsers(): Promise<User[]> {
  const r = await fetch(BASE);
  return r.json();
}

export async function addUser(u: User): Promise<User> {
  const r = await fetch(BASE, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(u) });
  return r.json();
}
