import { useState, useEffect } from 'react'
import { getHouses, updateHouse as apiUpdateHouse, deleteHouse as apiDeleteHouse } from '../api/houseApi'
import type { House } from '../types'

export function useHouses() {
  const [houses, setHouses] = useState<House[]>([])

  async function load() {
    const data = await getHouses()
    setHouses(data || [])
  }

  useEffect(() => {
    load()
  }, [])

  async function updateHouse(id: number, patch: Partial<House>) {
    await apiUpdateHouse(id, patch)
    await load()
  }

  async function deleteHouse(id: number) {
    await apiDeleteHouse(id)
    await load()
  }

  return { houses, load, updateHouse, deleteHouse }
}
