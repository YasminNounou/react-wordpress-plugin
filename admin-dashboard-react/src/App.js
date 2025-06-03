// App.js
import React from 'react';
import ListProperties from './ListProperties';

const properties = [
  {
    title: "2 bedroom apartment",
    location: "SO14",
    price: "160000",
    link: "https://Google.com",
    
  },
  {
    title: "3 bedroom house",
    location: "E1",
    price: "250000",
    link: "https://Google.com",
  },
  // Add more records as needed
];

function App() {
  return <ListProperties listings={properties} />;
}

export default App;
