import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "properties":
        return <h2>🏠 Properties Management</h2>;
      case "tenants":
        return <h2>👨‍👩‍👧 Tenants Management</h2>;
      case "agents":
        return <h2>🧑‍💼 Agents Management</h2>;
      case "leases":
        return <h2>📑 Lease Management</h2>;
      case "payments":
        return <h2>💵 Payments (Ksh)</h2>;
      case "reports":
        return <h2>📊 Income Reports</h2>;
      default:
        return <h2>📌 Welcome to Rental & Income Management System</h2>;
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>🏡 Rentals & Income Management</h1>
      </nav>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li onClick={() => setActivePage("dashboard")}>Dashboard</li>
            <li onClick={() => setActivePage("properties")}>Properties</li>
            <li onClick={() => setActivePage("tenants")}>Tenants</li>
            <li onClick={() => setActivePage("agents")}>Agents</li>
            <li onClick={() => setActivePage("leases")}>Leases</li>
            <li onClick={() => setActivePage("payments")}>Payments</li>
            <li onClick={() => setActivePage("reports")}>Reports</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
