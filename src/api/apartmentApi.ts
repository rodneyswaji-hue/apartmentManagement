import type { Apartment } from '../types'

const API_URL = 'http://localhost:3000/apartments'

export async function getApartments(): Promise<Apartment[]> {
  const res = await fetch(API_URL)
  return res.json()
}

export async function addApartment(apartment: Apartment): Promise<Apartment> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apartment)
  })
  return res.json()
}

export async function deleteApartment(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}

