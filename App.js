// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';

export default function App() {
  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("localhost:5001/api/listings")
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  const filtered = listings.filter(l =>
    l.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Hidden Deals</h1>
      <input
        placeholder="Filter by title"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(l => (
            <tr key={l.id}>
              <td>{l.title}</td>
              <td>{l.price}</td>
              <td>{l.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
