import express from 'express';
import data from './data.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect(
    'mongodb+srv://danfood:danfood@cluster0.6xdsrm0.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

app.use(express.json());
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('hi!');
});

app.post('/login', (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      password: req.body.password,
    },
    'secretToken',
  );

  res.json({
    success: true,
    token,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
