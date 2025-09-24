import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="kpis">
        <div className="kpi">Total Properties: 5</div>
        <div className="kpi">Active Tenants: 12</div>
        <div className="kpi">Monthly Income: $3,200</div>
      </div>

      <div className="card">
        <h3>Recent Payments</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Tenant</th>
              <th>Property</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>Apartment 2A</td>
              <td>$800</td>
              <td>2025-09-01</td>
              <td><span className="label success">Paid</span></td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>Apartment 3B</td>
              <td>$750</td>
              <td>2025-09-01</td>
              <td><span className="label warn">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
