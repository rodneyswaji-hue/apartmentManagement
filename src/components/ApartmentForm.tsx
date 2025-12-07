import React, { useState } from 'react'

interface ApartmentFormProps {
  onAdd: (data: {
    name: string
    location: string
    numHouses: number
    houses?: { number: string; tenantName?: string; rent?: number }[]
  }) => Promise<void>
}

export default function ApartmentForm({ onAdd }: ApartmentFormProps) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [numHouses, setNumHouses] = useState(1)
  const [houses, setHouses] = useState<
    { number: string; tenantName?: string; rent?: number }[]
  >([{ number: 'House 1', tenantName: '', rent: 0 }])

  // Update houses array if numHouses changes
  const handleNumHousesChange = (n: number) => {
    setNumHouses(n)
    const updated = Array.from({ length: n }, (_, i) => houses[i] || { number: `House ${i + 1}`, tenantName: '', rent: 0 })
    setHouses(updated)
  }

  const handleHouseChange = (index: number, field: 'tenantName' | 'rent', value: string | number) => {
    const updated = [...houses]
    updated[index] = { ...updated[index], [field]: value }
    setHouses(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !location || numHouses < 1) return alert('Please fill all required fields')
    await onAdd({ name, location, numHouses, houses })
    setName('')
    setLocation('')
    setNumHouses(1)
    setHouses([{ number: 'House 1', tenantName: '', rent: 0 }])
  }

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow rounded space-y-3">
      <h3 className="font-semibold text-lg">Add New Apartment</h3>
      <input
        type="text"
        placeholder="Apartment Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="input"
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="input"
        required
      />
      <input
        type="number"
        min={1}
        placeholder="Number of Houses"
        value={numHouses}
        onChange={e => handleNumHousesChange(Number(e.target.value))}
        className="input"
      />

      {houses.map((house, idx) => (
        <div key={idx} className="flex gap-2 items-center">
          <span>{house.number}</span>
          <input
            type="text"
            placeholder="Tenant Name"
            value={house.tenantName || ''}
            onChange={e => handleHouseChange(idx, 'tenantName', e.target.value)}
            className="input"
          />
          <input
            type="number"
            placeholder="Rent"
            value={house.rent || 0}
            onChange={e => handleHouseChange(idx, 'rent', Number(e.target.value))}
            className="input w-20"
          />
        </div>
      ))}

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Apartment
      </button>
    </form>
  )
}
