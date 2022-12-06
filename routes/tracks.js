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
const { validatorCreateItem } = require('../validators/tracks');

/**
 * Tracks routes
 */
router.get('/', getitems);

router.get('/:id', getitem);

router.post('/', validatorCreateItem, createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
