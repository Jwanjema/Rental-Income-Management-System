import React from "react";

export default function Leases() {
  return (
    <div className="card">
      <h3>Leases</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Property</th>
            <th>Start Date</th>
            <th>Deposit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>Green Apartments</td>
            <td>2025-01-01</td>
            <td>$800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
