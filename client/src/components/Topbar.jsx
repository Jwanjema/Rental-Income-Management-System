import React from "react";

export default function Topbar() {
  return (
    <header className="topbar">
      <h3>Rental & Income System</h3>
      <div className="controls">
        <button className="btn ghost">Settings</button>
        <button className="btn primary">+ Add</button>
      </div>
    </header>
  );
}
