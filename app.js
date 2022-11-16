require('dotenv').config();
const express = require('express');
const cors = require('cors');

/**
 * Express initialization
 */
const app = express();
const port = process.env.PORT || 8081;

/**
 * Middlewares
 */
app.use(cors());

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
