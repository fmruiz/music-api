const express = require('express');
const router = express.Router();
const {
    getitems,
    getitem,
    createItem,
    updateItem,
    deleteItem,
} = require('../controllers/tracks');

/**
 * Track routes
 */
router.get('/', getitems);

router.get('/:id', getitem);

router.post('/', createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
