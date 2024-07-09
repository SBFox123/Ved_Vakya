const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bookRouter = require('./routes/book');
const app = express();
app.use(cors());
app.use(express.json());



//routes
app.use('/books', bookRouter)

const PORT = 5001;
const DB_URI = 'mongodb://127.0.0.1:27017/VedVakya';

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Database connected'); 
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});