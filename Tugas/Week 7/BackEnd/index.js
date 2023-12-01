const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./routes/indexRouter');
app.use('/api', apiRouter);

const port = 3000;

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/football');
    console.log('Database connected');
  } catch (error) {
    console.log('Error connecting to the database:', error);
  }

  app.listen(port, () => {
    console.clear();
    console.log(`Server is running on port ${port}!`);
  });
};

startServer();
