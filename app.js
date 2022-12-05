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
 * Connect DB
 */
dbConnect();

/**
 * Middlewares
 */
app.use(cors());

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
