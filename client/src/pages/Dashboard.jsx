// client/src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard(){
  const [summary, setSummary] = useState({properties:0, tenants:0, collected:0});
  const [payments, setPayments] = useState([]);

  useEffect(()=> {
    api.get('/properties').then(r => setSummary(s => ({...s, properties: r.data.length}))).catch(()=>{});
    api.get('/tenants').then(r => setSummary(s => ({...s, tenants: r.data.length}))).catch(()=>{});
    api.get('/payments').then(r => {
      const items = r.data.items || [];
      setPayments(items);
      const total = items.reduce((acc, p) => acc + Number(p.amount || 0), 0);
      setSummary(s => ({...s, collected: total}));
    }).catch(()=>{});
  },[]);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="kpis">
        <div className="kpi"><div style={{fontSize:12,color:'#94a3b8'}}>Total Properties</div><div style={{fontSize:22,fontWeight:700}}>{summary.properties}</div></div>
        <div className="kpi"><div style={{fontSize:12,color:'#94a3b8'}}>Total Tenants</div><div style={{fontSize:22,fontWeight:700}}>{summary.tenants}</div></div>
        <div className="kpi"><div style={{fontSize:12,color:'#94a3b8'}}>Total Collected (KSH)</div><div style={{fontSize:22,fontWeight:700}}>KSH {Number(summary.collected).toLocaleString()}</div></div>
      </div>

      <div className="card">
        <h3>Recent Payments</h3>
        <table className="table">
          <thead><tr><th>ID</th><th>Lease</th><th>Amount</th><th>Date</th><th>Type</th></tr></thead>
          <tbody>
            {payments.slice(0,8).map(p => (
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
