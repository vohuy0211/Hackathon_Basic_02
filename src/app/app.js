const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
// middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
// database

// router
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello' });
});
// hanle error

module.exports = app;
