// client/src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">
        <div style={{width:42,height:42,borderRadius:10,background:'#2f80ed',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700}}>RI</div>
        <div>
          <div style={{fontSize:14}}>Rentals & Income</div>
          <div style={{fontSize:12,color:'#94a3b8'}}>Management</div>
        </div>
      </div>

      <nav className="menu">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/tenants">Tenants</NavLink>
        <NavLink to="/leases">Leases</NavLink>
        <NavLink to="/payments">Payments</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav>

      <div style={{fontSize:13,color:'#94a3b8',marginTop:10}}>Tip: Click + Add to create items</div>
    </aside>
  );
}
