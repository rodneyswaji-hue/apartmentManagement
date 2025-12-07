// src/auth/RegisterForm.tsx
import React, { useState } from 'react'
import { getUsers, addUser } from '../api/userApi'
import { simpleHash } from '../utils'
import type { User } from '../types'

export default function RegisterForm() {
  const [username, setUsername] = useState('')
  const [pin, setPin] = useState('')
  const [confirm, setConfirm] = useState('')

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    
    const users = await getUsers()
    if (users.length >= 3) return alert("Max 3 users.")

    if (!username.trim()) return alert("Username required.")
    if (pin.length < 4) return alert("PIN must be at least 4 digits.")
    if (pin !== confirm) return alert("PINs do not match.")
    if (users.some(u => u.username === username.trim()))
      return alert("Username already taken.")

    const newUser: User = {
      username: username.trim(),
      pinHash: simpleHash(pin)
    }

    await addUser(newUser)

    alert("User created successfully!")
    setUsername("")
    setPin("")
    setConfirm("")
  }

  return (
    <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow w-80">
      <h2 className="text-xl font-bold mb-4">Register</h2>

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
        className="w-full p-2 border rounded mb-3"
        placeholder="PIN"
      />

      <input
        type="password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Confirm PIN"
      />

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Create User
      </button>
    </form>
  )
}
