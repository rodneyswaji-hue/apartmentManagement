// src/auth/LoginForm.tsx
import React, { useState } from 'react'
import { getUsers } from '../api/userApi'
import { simpleHash } from '../utils'
import type { User } from '../types'

export default function LoginForm({ onLogin }: { onLogin: (u: User)=>void }) {
  const [username, setUsername] = useState('')
  const [pin, setPin] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const users = await getUsers()
    const match = users.find(u => u.username === username.trim() && u.pinHash === simpleHash(pin))

    if (!match) return alert("Invalid username or PIN")

    onLogin(match)
  }

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow w-80">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-full p-2 border rounded mb-3"
        placeholder="Username"
      />

      <input
        type="password"
        value={pin}
        onChange={e => setPin(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="4-digit PIN"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  )
}
