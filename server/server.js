import express from 'express';
const app = express();
import data from './data.js';
import cors from 'cors';

// app.use(express.json());
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
