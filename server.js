import pkg from 'typeorm';
const { createConnection } = pkg;
//import { Users } from './src/users';
//import { createConnection } from 'typeorm';
import express from 'express';
//import data from './data.js';
import dotenv from 'dotenv';
import mysql from 'mysql';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import data from './data.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = async () => {
  try {
    await createConnection({
      type: 'mysql',
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'online_store',
      //      entities: [Users],
    });
    console.log('Connected to MySql DB');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to MySql DB');
  }
};

/*const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'online_store',
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('MYSQL Connected...');
  }
});*/

export default db;

/*const {
  name,
  category,
  image,
  price,
  countInStock,
  brand,
  rating,
  numReviews,
  description,
} = data.products;

db.query(
  'INSERT INTO users SET ?',
  {
    /*    name: name,
    category: category,
    image: image,
    price: price,
    countInStock: countInStock,
    brand: brand,
    rating: rating,
    numReviews: numReviews,
    description: description,

    name: 'Luke',
    email: 'user@onlinestore.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
  (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      //      return res.render('added', {
      //        message: 'Products added',
    }
  }
);
//  }
//);
*/

/*app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not Found' });
  }
});*/

/*app.get('/api/products', (req, res) => {
  res.send(data.products);
});*/
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
