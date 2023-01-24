import express from 'express';
import data from './data.js';
import cors from 'cors';
import mongoose from 'mongoose';
import checkMe from './utils/checkMe.js';
import { registerValidation } from './validations/reg.js';
import { login, register } from './controllers/UserController.js';

const app = express();

mongoose
  .connect(
    'mongodb+srv://danfood:danfood@cluster0.6xdsrm0.mongodb.net/food?retryWrites=true&w=majority',
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

app.post('/register', registerValidation, register);

app.post('/login', login);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
