require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');

/**
 * Express initialization
 */
const app = express();
const port = process.env.PORT || 8081;

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

/**
 * Connect DB
 */
dbConnect();

/**
 * Routes
 */
app.use('/api/tracks', require('./routes/tracks'));
app.use('/api/storage', require('./routes/storage'));

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
