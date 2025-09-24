import React from "react";

export default function Payments() {
  return (
    <div className="card">
      <h3>Payments</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>$800</td>
            <td>2025-09-01</td>
            <td><span className="label success">Paid</span></td>
          </tr>
          <tr>
            <td>John Smith</td>
            <td>$750</td>
            <td>2025-09-01</td>
            <td><span className="label warn">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
