// client/src/pages/Leases.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Leases(){
  const [leases, setLeases] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({tenant_id:"", unit_id:"", start_date:"", end_date:"", rent_amount:"", deposit_amount:""});

  useEffect(()=> {
    load();
    api.get('/tenants').then(r=>setTenants(r.data)).catch(()=>{});
    api.get('/properties').then(r=>setProperties(r.data)).catch(()=>{});
  },[]);

  function load(){ api.get('/leases').then(r=>setLeases(r.data)).catch(()=>{}); }

  async function submit(e){
    e.preventDefault();
    await api.post('/leases', form);
    setForm({tenant_id:"", unit_id:"", start_date:"", end_date:"", rent_amount:"", deposit_amount:""});
    load();
  }

  // compute units list for chosen property
  const selectedProperty = properties.find(p => p.id === Number(form.property_id));

  return (
    <div>
      <h2>Leases</h2>

      <div className="card" style={{marginBottom:20}}>
        <form onSubmit={submit} style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,alignItems:'end'}}>
          <div>
            <label>Tenant</label>
            <select required value={form.tenant_id} onChange={e=>setForm({...form, tenant_id:e.target.value})}>
              <option value="">Select tenant</option>
              {tenants.map(t => <option key={t.id} value={t.id}>{t.full_name}</option>)}
            </select>
          </div>

          <div>
            <label>Property</label>
            <select value={form.property_id || ""} onChange={e=>setForm({...form, property_id:e.target.value})}>
              <option value="">Select property (optional)</option>
              {properties.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>

          <div>
            <label>Unit (if property selected)</label>
            <select value={form.unit_id} onChange={e=>setForm({...form, unit_id:e.target.value})}>
              <option value="">Select unit</option>
              {(properties.find(p => p.id === Number(form.property_id))?.units || []).map(u => (
                <option key={u.id} value={u.id}>{u.unit_number} — KSH {u.monthly_rent}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Start Date</label>
            <input type="date" value={form.start_date} onChange={e=>setForm({...form,start_date:e.target.value})} required />
          </div>

          <div>
            <label>End Date (optional)</label>
            <input type="date" value={form.end_date} onChange={e=>setForm({...form,end_date:e.target.value})} />
          </div>

          <div>
            <label>Rent Amount</label>
            <input type="number" value={form.rent_amount} onChange={e=>setForm({...form,rent_amount:e.target.value})} required />
          </div>

          <div>
            <label>Deposit</label>
            <input type="number" value={form.deposit_amount} onChange={e=>setForm({...form,deposit_amount:e.target.value})} />
          </div>

          <div style={{gridColumn:'1 / -1', textAlign:'right'}}>
            <button className="btn primary" type="submit">Create Lease</button>
          </div>
        </form>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>ID</th><th>Tenant</th><th>Unit</th><th>Rent</th><th>Start</th><th>End</th></tr></thead>
          <tbody>
            {leases.map(l => (
              <tr key={l.id}>
                <td>#{l.id}</td>
                <td>{l.tenant?.full_name}</td>
                <td>{l.unit?.unit_number}</td>
                <td>KSH {Number(l.rent_amount).toLocaleString()}</td>
                <td>{l.start_date}</td>
                <td>{l.end_date || 'Ongoing'}</td>
              </tr>
            ))}
            {leases.length===0 && <tr><td colSpan="6" className="hint">No leases yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
