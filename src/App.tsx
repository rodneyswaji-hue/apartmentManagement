import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

export default function App(){
  return (
    <div>
      <nav style={{background:'#111827', color:'#fff', padding:12}}>
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><strong>Rental Manager</strong></div>
          <div style={{display:'flex', gap:12}}>
            <Link to="/" style={{color:'#fff'}}>Home</Link>
            <Link to="/register" style={{color:'#fff'}}>Register</Link>
            <Link to="/login" style={{color:'#fff'}}>Login</Link>
          </div>
        </div>
      </nav>
      <main className="container" style={{paddingTop:24}}>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </main>
    </div>
  )
}
