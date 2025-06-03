// PropertyTable.js
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Typography } from '@mui/material';
const PORT= 5001;

export default function ListProperties({ listings }) {
  const [searchText, setSearchText] = React.useState('');
    // Initialize properties with the listings prop
  const [properties, setProperties] = React.useState(listings);

    // Fetch properties from the API when the component mounts
    React.useEffect(() => {
        fetch(`http://localhost:${PORT}/api/listings/`)
        .then(res => res.json())
        .then(data => setProperties(data));
    }, [properties]);

// Filter properties based on search text
  React.useEffect(() => {
    const filtered = properties.filter((row) =>
      row.title.toLowerCase().includes(searchText.toLowerCase()) ||
      row.location.toLowerCase().includes(searchText.toLowerCase()) ||
      row.price.toString().includes(searchText)
    );
    setProperties(filtered);
  }, [searchText, properties]);

  const columns = [
    { field: 'title', headerName: 'Title', width: 250, sortable: true },
    { field: 'location', headerName: 'Location', width: 150, sortable: true },
    { field: 'link', headerName: 'Link', width: 150, sortable: true },
    {field: 'price',
    headerName: 'Price (£)',
    width: 150,
    sortable: true,
    renderCell: (params) => {
        const cleaned = typeof params.value === 'string' ? params.value.replace(/[^\d.]/g, '') : params.value;
        const priceNumber = Number(cleaned);
        return <span>{params.value ? `£${Number(priceNumber).toLocaleString().replace(/[^\d.]/g, '')}` : 'N/A'}</span>
    }
}
  ];

  return (
    <Box sx={{ height: 400, width: '100%',padding: 2, backgroundColor: '#fff', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Property Listings
      </Typography>
      <TextField
        label="Search by title or location"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <DataGrid
        rows={properties.map((row, index) => ({ id: index + 1, ...row }))}
        columns={columns}
        // pageSizeOptions={[5, 10, 25]}
        // rowsPerPage={10}
        disableSelectionOnClick
        sortingOrder={['asc', 'desc']}
        autosizeOnMount={true}
        
      />
    </Box>
  );
}
