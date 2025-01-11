const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files from 'src' folder
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

// Example API endpoint
app.get('/api/stocks', (req, res) => {
    const stocks = [
        { name: 'Stock A', price: 100 },
        { name: 'Stock B', price: 200 }
    ];
    res.json(stocks);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/api/portfolio', (req, res) => {
    res.json([
      { id: 1, name: 'RELIANCE', quantity: 10 },
      { id: 2, name: 'ADANI', quantity: 5 },
      { id: 3, name: 'WARREN.CO', quantity: 2 }
    ]);
  });