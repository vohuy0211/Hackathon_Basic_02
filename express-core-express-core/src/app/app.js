const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const UserRoute = require('./routes/user.Router');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors(corsOptions));
// database

// router
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello' });
});

app.use('/api/v1/', UserRoute);
// hanle error

module.exports = app;
