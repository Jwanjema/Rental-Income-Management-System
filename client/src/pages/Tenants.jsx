import React from "react";

export default function Tenants() {
  return (
    <div className="card">
      <h3>Tenants</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Property</th>
            <th>Unit</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>Green Apartments</td>
            <td>2A</td>
            <td>+254 700 123456</td>
          </tr>
          <tr>
            <td>John Smith</td>
            <td>Blue Villas</td>
            <td>1B</td>
            <td>+254 711 987654</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
