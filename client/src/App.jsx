import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import Leases from "./pages/Leases";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/leases" element={<Leases />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
