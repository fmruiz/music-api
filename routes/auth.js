const express = require('express');
const router = express.Router();

/**
 * Auth controllers
 */
const { postRegister } = require('../controllers/auth');

/**
 * Auth validators
 */
const { validatorRegisterItem, validatorLogin } = require('../validators/auth');

/**
 * Auth routes
 */
router.post('/register', validatorRegisterItem, postRegister);

module.exports = router;
