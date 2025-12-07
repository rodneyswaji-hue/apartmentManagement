import { useEffect, useState } from 'react'
import { getApartments, addApartment, deleteApartment } from '../api/apartmentApi'
import { addHouse } from '../api/houseApi'
import type { Apartment } from '../types'

export function useApartments() {
  const [apartments, setApartments] = useState<Apartment[]>([])

  async function load() {
    const data = await getApartments()
    setApartments(data || [])
  }

  useEffect(() => {
    load()
  }, [])

  async function add(a: { name: string; location: string; numHouses?: number }) {
    const ap = await addApartment({
      name: a.name,
      location: a.location,
      numHouses: a.numHouses || 1
    })

    const n = Math.max(1, Math.floor(a.numHouses || 1))
    for (let i = 1; i <= n; i++) {
      await addHouse({
        apartmentId: ap.id!,
        number: `House ${i}`,
        tenantName: null,
        rent: 0,
        debt: 0
      })
    }

    await load()
    return ap
  }

  async function remove(id: number) {
    await deleteApartment(id)
    await load()
  }

  return { apartments, load, add, remove }
}
