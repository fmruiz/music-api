const express = require('express');
const router = express.Router();

/**
 * Auth validators
 */
const { validatorRegisterItem, validatorLogin } = require('../validators/auth');

/**
 * Auth routes
 */
router.post('/register', validatorRegisterItem, (req, res) => {
    res.send('req');
});

module.exports = router;
