// client/src/pages/Properties.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Properties(){
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({name:"", address:""});

  useEffect(()=> { load(); }, []);
  function load(){ api.get('/properties').then(r => setProperties(r.data)).catch(()=>{}); }

  const submit = async (e) => {
    e.preventDefault();
    await api.post('/properties', form);
    setForm({name:"", address:""});
    load();
  };

  return (
    <div>
      <h2>Properties</h2>
      <div className="card" style={{marginBottom:20}}>
        <form onSubmit={submit} style={{display:'flex',gap:10,alignItems:'center'}}>
          <input placeholder="Property name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input placeholder="Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} />
          <button className="btn primary" type="submit">Add Property</button>
        </form>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>Name</th><th>Address</th><th>Units</th></tr></thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id}><td>{p.name}</td><td>{p.address}</td><td>{(p.units||[]).length}</td></tr>
            ))}
            {properties.length===0 && <tr><td colSpan="3" className="hint">No properties yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
