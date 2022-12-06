const { tracksModel } = require('../models');

/**
 * GET all items
 * @param {*} req
 * @param {*} res
 */
exports.getitems = async (req, res) => {
    const data = await tracksModel.find({});

    res.send({ data });
};

/**
 * GET one item
 * @param {*} req
 * @param {*} res
 */
exports.getitem = (req, res) => {
    res.send('get item');
};

/**
 * POST one item
 * @param {*} req
 * @param {*} res
 */
exports.createItem = async (req, res) => {
    const { body } = req;

    const data = await tracksModel.create(body);

    res.send({ data });
};

/**
 * PUT or edit an item
 * @param {*} req
 * @param {*} res
 */
exports.updateItem = (req, res) => {
    res.send('update item');
};

/**
 * DELETE one item
 * @param {*} req
 * @param {*} res
 */
exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    const data = await tracksModel.findByIdAndDelete(id);

    res.send({ data });
};
