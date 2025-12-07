import React, { useState } from 'react'
import type { House } from '../types'

export default function HouseCard({
  apartmentId,
  house,
  onPay,
  onDeleteHouse,
  onUpdateHouse
}:{
  apartmentId:number,
  house:House,
  onPay:(apId:number, house:House, amount:number, date:string)=>Promise<void>,
  onDeleteHouse?: ()=>void,
  onUpdateHouse?: (patch: Partial<House>) => void
}) {
  const [amt, setAmt] = useState<number|''>('')
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const [tenantName, setTenantName] = useState(house.tenantName || '')
  const [rent, setRent] = useState(house.rent)

  async function pay(){
    if(!amt || Number(amt)<=0) return alert('Enter amount')
    await onPay(apartmentId, house, Number(amt), date)
    setAmt('')
  }

  function updateHouse(){
    onUpdateHouse?.({ tenantName, rent })
  }

  return (
    <div className="card p-3 border rounded shadow">
      <div className="flex justify-between items-center">
        <strong>{house.number}</strong>
        <button className="text-red-500" onClick={onDeleteHouse}>Delete House</button>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <input
          value={tenantName}
          onChange={e=>setTenantName(e.target.value)}
          placeholder="Tenant name"
          className="border p-1 rounded"
        />
        <input
          type="number"
          value={rent}
          onChange={e=>setRent(Number(e.target.value))}
          placeholder="Rent"
          className="border p-1 rounded"
        />
      </div>

      <div className="mt-2">
        Debt: {house.debt}
      </div>

      <div className="mt-2 flex gap-2 items-center">
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border p-1 rounded"/>
        <input type="number" value={amt as any} onChange={e=>setAmt(e.target.value===''?'':Number(e.target.value))} placeholder="Amount" className="border p-1 rounded"/>
        <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={pay}>Record Payment</button>
        <button className="px-2 py-1 bg-green-600 text-white rounded" onClick={updateHouse}>Update House</button>
      </div>
    </div>
  )
}

