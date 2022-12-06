const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { tracksErrorMessages } = require('../constants/errorMessages');

/**
 * GET all items
 * @param {*} req
 * @param {*} res
 */
exports.getitems = async (req, res) => {
    try {
        const data = await tracksModel.find({});

        res.send({ data });
    } catch (error) {
        handleHttpError(
            res,
            tracksErrorMessages.getItems.errorName,
            tracksErrorMessages.getItems.errorStatus
        );
        console.log({ error });
    }
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
    try {
        const { body } = req;

        const data = await tracksModel.create(body);

        res.send({ data });
    } catch (error) {
        handleHttpError(
            res,
            tracksErrorMessages.createItem.errorName,
            tracksErrorMessages.createItem.errorStatus
        );
        console.log({ error });
    }
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
