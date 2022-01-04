const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Config dotev
require('dotenv').config({
  path: './config/config.env',
});

//connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to mongo DB 🗃'))
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser);

//config for only development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Load all controllers
const authRouter = require('./routes/auth.route');
const { connect } = require('mongoose');

//use Routes
app.use('/api', authRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'page not found',
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server up and running on PORT ' + PORT);
});
