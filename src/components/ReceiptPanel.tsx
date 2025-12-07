import React, { useState } from 'react'
import type { Apartment, House } from '../types'

interface ReceiptPanelProps {
  apartments: Array<Apartment & { houses: House[] }>
  onGeneratePDF: (apId: number, hId: number) => void
}

export default function ReceiptPanel({ apartments, onGeneratePDF }: ReceiptPanelProps) {
  const [selectedApartmentId, setSelectedApartmentId] = useState<number | null>(null)

  const selectedApartment = apartments.find(ap => ap.id === selectedApartmentId)

  return (
    <div className="card p-4 shadow rounded space-y-3">
      <h3 className="font-semibold text-lg">Receipts</h3>

      <select
        value={selectedApartmentId || ''}
        onChange={e => setSelectedApartmentId(Number(e.target.value))}
        className="input w-full"
      >
        <option value="">Select Apartment</option>
        {apartments.map(ap => (
          <option key={ap.id} value={ap.id}>{ap.name} — {ap.location}</option>
        ))}
      </select>

      {selectedApartment && (
        <div className="space-y-2 mt-2">
          {selectedApartment.houses.map(house => (
            <div key={house.id} className="p-2 border rounded flex justify-between items-center">
              <div>
                <strong>{house.number}</strong> — {house.tenantName || '-'}<br/>
                Rent: {house.rent} | Debt: {house.debt}
              </div>
              <button
                onClick={() => onGeneratePDF(selectedApartment.id!, house.id!)}
                className="px-2 py-1 bg-green-600 text-white rounded"
              >
                PDF
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

