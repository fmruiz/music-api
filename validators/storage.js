const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

/**
 * Storage validators
 */
exports.validatorGetItem = [
    check('filename').exists().notEmpty(),

    check('url').exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    },
];
