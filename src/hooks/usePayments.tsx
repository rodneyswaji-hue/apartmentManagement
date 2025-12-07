import { addReceipt } from '../api/receiptApi'
import { updateHouse } from '../api/houseApi'
import type { Receipt, House } from '../types'
export function usePayments(reload: ()=>Promise<void>){
  async function recordPayment(house:House, amount:number, date:string){
    const receipt:Receipt = { houseId: house.id!, date, amount }
    await addReceipt(receipt)
    let newDebt = (house.debt||0) - amount
    if(newDebt<0) newDebt=0
    await updateHouse(house.id!, { debt: newDebt })
    await reload()
  }
  return { recordPayment }
}
