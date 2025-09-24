// client/src/pages/Tenants.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Tenants(){
  const [tenants, setTenants] = useState([]);
  const [form, setForm] = useState({full_name:"", phone:"", email:""});

  useEffect(()=> load(), []);
  function load(){ api.get('/tenants').then(r=>setTenants(r.data)).catch(()=>{}); }

  async function submit(e){
    e.preventDefault();
    await api.post('/tenants', form);
    setForm({full_name:"", phone:"", email:""});
    load();
  }

  return (
    <div>
      <h2>Tenants</h2>

      <div className="card" style={{marginBottom:20}}>
        <form onSubmit={submit} style={{display:'flex',gap:10,alignItems:'center'}}>
          <input placeholder="Full name" value={form.full_name} onChange={e=>setForm({...form,full_name:e.target.value})} required />
          <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
          <input placeholder="Email (optional)" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <button className="btn primary" type="submit">Add Tenant</button>
        </form>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
          <tbody>
            {tenants.map(t => (<tr key={t.id}><td>{t.full_name}</td><td>{t.email}</td><td>{t.phone}</td></tr>))}
            {tenants.length===0 && <tr><td colSpan="3" className="hint">No tenants yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
