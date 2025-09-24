import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">🏠 Rentals</div>
      <nav className="menu">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/tenants">Tenants</NavLink>
        <NavLink to="/leases">Leases</NavLink>
        <NavLink to="/payments">Payments</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav>
    </aside>
  );
}
