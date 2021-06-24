const express = require('express');
const cors = require('cors');
const router = require('./routes/user.routes');

const app = express();

//settings
app.set('port', 5000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use(router);

module.exports = app;
