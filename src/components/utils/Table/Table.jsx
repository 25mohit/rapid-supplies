import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productName', headerName: 'Product name', width: 130 },
  { field: 'productDescription', headerName: 'Product description', width: 270 },
  {
    field: 'price',
    headerName: 'Price (AED)',
    type: 'number',
    width: 110,
  },
  {
    field: 'createdBy',
    headerName: 'Created By',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.productName || ''} ${row.productDescription || ''}`,
  },
];

const rows = [
  { id: 1, productDescription: 'Freshly Baked Bread', productName: 'Toaster', price: 450, createdBy: 'Alice Johnson' },
  { id: 2, productDescription: 'Organic Green Tea', productName: 'Tea Set', price: 256, createdBy: 'Brian Smith' },
  { id: 3, productDescription: 'Wireless Bluetooth Speaker', productName: 'SoundWave', price: 780, createdBy: 'Emily Davis' },
  { id: 4, productDescription: 'Handmade Pottery Mug', productName: 'Ceramics', price: 620, createdBy: 'Michael Lee' },
  { id: 5, productDescription: 'Eco-Friendly Notebook', productName: 'Journal', price: 457, createdBy: 'Sarah Wilson' },
  { id: 6, productDescription: 'Stainless Steel Water Bottle', productName: 'Hydration Flask', price: 150, createdBy: 'David Brown' },
  { id: 7, productDescription: 'Noise Cancelling Headphones', productName: 'QuietComfort', price: 440, createdBy: 'Jessica Garcia' },
  { id: 8, productDescription: 'Smartphone Stand', productName: 'Gadget Holder', price: 360, createdBy: 'Daniel Martinez' },
  { id: 9, productDescription: 'Portable Phone Charger', productName: 'Power Bank', price: 650, createdBy: 'Laura Anderson' },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{  width: '100%', maxWidth: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          '& .MuiDataGrid-cell': {
            whiteSpace: 'nowrap', // Prevent cell text from wrapping
            overflow: 'hidden',
            textOverflow: 'ellipsis', // Add ellipsis for overflowing text
          },
        }}
      />
    </Paper>
  );
}
