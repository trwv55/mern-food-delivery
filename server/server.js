import express from 'express';
import data from './data.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import { validationResult } from 'express-validator';
import { registerValidation } from './validations/reg.js';
import UserModel from './models/user.js';

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

app.post('/register', registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      name: req.body.name,
      email: req.body.email,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret',
      {
        expiresIn: '30d',
      },
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...user._doc,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось зарегестрироваться',
    });
  }
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
