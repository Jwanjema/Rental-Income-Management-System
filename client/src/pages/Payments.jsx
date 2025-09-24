// client/src/pages/Payments.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Payments(){
  const [payments, setPayments] = useState([]);
  const [leases, setLeases] = useState([]);
  const [form, setForm] = useState({lease_id:"", amount:"", payment_type:"rent", method:"mpesa", reference:""});

  useEffect(()=> {
    load();
    api.get('/leases').then(r=>setLeases(r.data)).catch(()=>{});
  },[]);

  function load(){
    api.get('/payments?page=1&per_page=200').then(r => setPayments(r.data.items || [])).catch(()=>{});
  }

  async function submit(e){
    e.preventDefault();
    await api.post('/payments', {...form, amount: Number(form.amount)});
    setForm({lease_id:"", amount:"", payment_type:"rent", method:"mpesa", reference:""});
    load();
  }

  return (
    <div>
      <h2>Payments</h2>

      <div className="card" style={{marginBottom:20}}>
        <form onSubmit={submit} style={{display:'flex',gap:10,alignItems:'center'}}>
          <select required value={form.lease_id} onChange={e=>setForm({...form,lease_id:e.target.value})}>
            <option value="">Select lease</option>
            {leases.map(l => <option key={l.id} value={l.id}>#{l.id} — {l.tenant?.full_name} / {l.unit?.unit_number}</option>)}
          </select>
          <input placeholder="Amount" type="number" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} required />
          <select value={form.payment_type} onChange={e=>setForm({...form,payment_type:e.target.value})}><option value="rent">Rent</option><option value="deposit">Deposit</option></select>
          <input placeholder="Reference" value={form.reference} onChange={e=>setForm({...form,reference:e.target.value})} />
          <button className="btn primary" type="submit">Add Payment</button>
        </form>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>ID</th><th>Lease</th><th>Amount</th><th>Date</th><th>Type</th></tr></thead>
          <tbody>
            {payments.map(p => (
              <tr key={p.id}>
                <td>#{p.id}</td>
                <td>{p.lease_id}</td>
                <td>KSH {Number(p.amount).toLocaleString()}</td>
                <td>{new Date(p.date).toLocaleDateString()}</td>
                <td>{p.payment_type}</td>
              </tr>
            ))}
            {payments.length===0 && <tr><td colSpan="5" className="hint">No payments yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
