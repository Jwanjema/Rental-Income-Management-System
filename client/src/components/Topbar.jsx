// client/src/components/Topbar.jsx
import React from "react";

export default function Topbar(){
  return (
    <header className="topbar">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <input placeholder="Search tenants, units..." style={{padding:10,borderRadius:10,border:'1px solid #eef3f8',width:420}} />
      </div>
      <div className="controls">
        <button className="btn ghost">Import</button>
        <button className="btn primary">+ Add</button>
      </div>
    </header>
  );
}
