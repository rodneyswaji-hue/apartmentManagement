import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(){ return (
  <header style={{maxWidth:1100, margin:'0 auto', padding:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <div style={{fontWeight:700}}>🏠 Rental Manager</div>
    <nav style={{display:'flex', gap:12}}>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
) }
