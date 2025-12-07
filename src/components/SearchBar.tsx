import React from 'react'
export default function SearchBar({ value, onChange }:{ value:string; onChange:(v:string)=>void }){
  return (<div style={{marginBottom:12}}><input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search" style={{width:'100%', padding:8, borderRadius:8, border:'1px solid #e5e7eb'}}/></div>)
}
