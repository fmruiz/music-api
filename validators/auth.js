const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

/**
 * Auth validators
 */
exports.validatorRegisterItem = [
    check('name').exists().notEmpty(),

    check('age').exists().notEmpty(),

    check('email').exists().notEmpty(),

    check('password').exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    },
];

exports.validatorLogin = [
    check('email').exists().notEmpty(),

    check('password').exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    },
];
