const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json([
    { id: 1, name: 'Stock A', price: 100 },
    { id: 2, name: 'Stock B', price: 200 },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
