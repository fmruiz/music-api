const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');

/**
 * Storage controllers
 */
const {
    createItem,
    getItem,
    getItems,
    deleteItem,
} = require('../controllers/storage');

/**
 * Storage validators
 */
const { validatorGetItem } = require('../validators/storage');

/**
 * Storage routes
 */
router.get('/', getItems);

router.get('/:id', validatorGetItem, getItem);

router.post('/', uploadMiddleware.single('myfile'), createItem);

router.delete('/:id', deleteItem);

module.exports = router;
