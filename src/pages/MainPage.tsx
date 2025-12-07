import React, { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { useApartments } from '../hooks/useApartments'
import { useHouses } from '../hooks/useHouses'
import { usePayments } from '../hooks/usePayments'
import ApartmentList from '../components/ApartmentList'
import ReceiptPanel from '../components/ReceiptPanel'
import ApartmentForm from '../components/ApartmentForm'

export default function MainPage() {
  const [query, setQuery] = useState('')
  const { apartments, load: reloadApartments, add: addApartment, remove: deleteApartment } = useApartments()
  const { houses, load: reloadHouses, updateHouse, deleteHouse } = useHouses()
  const { recordPayment } = usePayments(async () => {
    await Promise.all([reloadApartments(), reloadHouses()])
  })

  // Combine apartments with houses
  const apartmentsWithHouses = useMemo(
    () =>
      apartments.map(ap => ({
        ...ap,
        houses: houses.filter(h => h.apartmentId === ap.id)
      })),
    [apartments, houses]
  )

  // Filter by search query
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    if (!q) return apartmentsWithHouses
    return apartmentsWithHouses
      .map(ap => ({
        ...ap,
        houses: ap.houses.filter(
          h =>
            ap.name.toLowerCase().includes(q) ||
            ap.location.toLowerCase().includes(q) ||
            String(h.number).toLowerCase().includes(q) ||
            (h.tenantName || '').toLowerCase().includes(q)
        )
      }))
      .filter(ap => ap.houses.length > 0)
  }, [query, apartmentsWithHouses])

  const handlePay = async (apId: number, house: any, amount: number, date: string) => {
    await recordPayment(house, amount, date)
  }

  const handleAddApartment = async (a: { name: string; location: string; numHouses: number }) => {
    await addApartment(a)
  }

  function generatePDF(apId: number, hId: number) {
    alert('PDF not implemented')
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <ApartmentForm onAdd={handleAddApartment} />
        </div>
        <div style={{ width: 320 }}>
          <ReceiptPanel apartments={apartmentsWithHouses} onGeneratePDF={generatePDF} />
        </div>
      </div>

      <div className="card p-4">
        <SearchBar value={query} onChange={setQuery} />
        <div style={{ marginTop: 12 }}>
          <ApartmentList
            apartments={filtered}
            onDeleteApartment={deleteApartment}
            onDeleteHouse={(apId, hId) => deleteHouse(hId)}
            onUpdateHouse={(hId, patch) => updateHouse(hId, patch)}
            onPay={handlePay}
          />
        </div>
      </div>
    </div>
  )
}
