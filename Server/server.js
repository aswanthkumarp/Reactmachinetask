const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Sample data for the table
const tableData = [
  { id: 1, name: 'Item 1', quantity: 10, price: 20 },
  { id: 2, name: 'Item 2', quantity: 15, price: 25 },
  { id: 3, name: 'Item 3', quantity: 8, price: 15 },
  { id: 4, name: 'Item 4', quantity: 12, price: 30 },
  { id: 5, name: 'Item 5', quantity: 18, price: 22 },
];

app.get('/api/table', (req, res) => {
  res.json(tableData);
});

// Sample data for the pie chart
const pieChartData = [
  { label: 'Category A', value: 30, color: '' },
  { label: 'Category B', value: 20, color: '' },
  { label: 'Category C', value: 15, color: '' },
  { label: 'Category D', value: 25, color: '' },
  { label: 'Category E', value: 10, color: '' },
];

app.get('/api/pie-chart', (req, res) => {
  res.json(pieChartData);
});

// Sample data for the graph
const graphData = [
  { x: 'Jan', y: 10 },
  { x: 'Feb', y: 15 },
  { x: 'Mar', y: 8 },
  { x: 'Apr', y: 12 },
  { x: 'May', y: 18 },
  { x: 'June', y:0 },
  { x: 'July', y: 0 },
  { x: 'August', y: 0 },
  { x: 'September', y: 0 },
  { x: 'October', y:0 },
  { x: 'November', y:0 },
  { x: 'December', y:0 },

];

app.get('/api/graph', (req, res) => {
  res.json(graphData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});