const express = require('express');
const router = express.Router();

/**
 * Tracks controllers
 */
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
} = require('../controllers/tracks');

/**
 * Tracks validators
 */
const {
    validatorCreateItem,
    validatorGetItem,
} = require('../validators/tracks');

/**
 * Tracks routes
 */
router.get('/', getItems);

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
