import type { House } from '../types'

const API_URL = 'http://localhost:3000/houses'

export async function getHouses(): Promise<House[]> {
  const res = await fetch(API_URL)
  return res.json()
}

export async function addHouse(house: House): Promise<House> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(house)
  })
  return res.json()
}

export async function updateHouse(id: number, patch: Partial<House>): Promise<House> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch)
  })
  return res.json()
}

export async function deleteHouse(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}

