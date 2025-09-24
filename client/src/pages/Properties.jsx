import React from "react";

export default function Properties() {
  return (
    <div className="card">
      <h3>Properties</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Units</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Green Apartments</td>
            <td>10</td>
            <td>Nairobi</td>
          </tr>
          <tr>
            <td>Blue Villas</td>
            <td>6</td>
            <td>Mombasa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
