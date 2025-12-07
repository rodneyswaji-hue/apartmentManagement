import React from 'react'
import type { Apartment, House } from '../types'
import HouseCard from './HouseCard'

export default function ApartmentList({
  apartments,
  onDeleteApartment,
  onDeleteHouse,
  onUpdateHouse,
  onPay
}:{
  apartments: Array<Apartment & { houses: House[] }>,
  onDeleteApartment:(id:number)=>void,
  onDeleteHouse:(apId:number, houseId:number)=>void,
  onUpdateHouse:(houseId:number, patch:Partial<House>)=>void,
  onPay:(apId:number, house:House, amount:number, date:string)=>Promise<void>
}) {
  return (
    <div style={{display:'grid', gap:12}}>
      {apartments.map(ap => (
        <div key={ap.id} className="card p-4 shadow rounded">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h3 className="font-bold text-lg">{ap.name}</h3>
              <div className="text-gray-500">{ap.location}</div>
            </div>
            <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={()=>onDeleteApartment(ap.id!)}>Delete Apartment</button>
          </div>
          <div style={{display:'grid', gap:8, marginTop:12}}>
            {ap.houses.map(h => (
              <HouseCard
                key={h.id}
                apartmentId={ap.id!}
                house={h}
                onPay={onPay}
                onDeleteHouse={() => onDeleteHouse(ap.id!, h.id!)}
                onUpdateHouse={(patch) => onUpdateHouse(h.id!, patch)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
