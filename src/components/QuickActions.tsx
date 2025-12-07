import { useNavigate } from 'react-router-dom'
export default function QuickActions() {
  const navigate = useNavigate()
  return (
    <div>
      <h3 className="font-semibold">Quick actions</h3>
      <div className="mt-3 flex flex-col gap-2">
        <button onClick={()=>navigate('/register')} className="px-3 py-2 bg-blue-600 text-white rounded">Register apartment / edit houses</button>
      </div>
    </div>
  )
}
