// client/src/pages/Reports.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Reports(){
  const [data, setData] = useState([]);
  useEffect(()=> {
    api.get('/reports/income').then(r => setData(r.data)).catch(()=>{});
  },[]);

  return (
    <div>
      <h2>Reports</h2>
      <div className="card">
        <h4>Income by month</h4>
        <table className="table">
          <thead><tr><th>Month</th><th>Total (KSH)</th></tr></thead>
          <tbody>
            {data.map(d => (<tr key={d.month}><td>{d.month}</td><td>KSH {Number(d.total).toLocaleString()}</td></tr>))}
            {data.length===0 && <tr><td colSpan="2" className="hint">No data</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
