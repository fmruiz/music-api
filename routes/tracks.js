const express = require('express');
const router = express.Router();

/**
 * Tracks controllers
 */
const {
    getitems,
    getitem,
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
router.get('/', getitems);

router.get('/:id', validatorGetItem, getitem);

router.post('/', validatorCreateItem, createItem);

router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
