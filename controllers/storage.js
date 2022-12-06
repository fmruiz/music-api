const fs = require('fs');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { storageErrorMessages } = require('../constants/errorMessages');

/**
 * GET all items
 * @param {*} req
 * @param {*} res
 */
exports.getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});

        res.send({ data });
    } catch (error) {
        handleHttpError(
            res,
            storageErrorMessages.getItems.errorName,
            storageErrorMessages.getItems.errorStatus
        );
        console.log({ error });
    }
};

/**
 * GET one item
 * @param {*} req
 * @param {*} res
 */
exports.getItem = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await storageModel.findById(id);

        res.send({ data });
    } catch (error) {
        handleHttpError(
            res,
            storageErrorMessages.getItem.errorName,
            storageErrorMessages.getItem.errorStatus
        );
        console.log({ error });
    }
};

/**
 * POST one item
 * @param {*} req
 * @param {*} res
 */
exports.createItem = async (req, res) => {
    try {
        const { file } = req;

        const fileData = {
            filename: file.filename,
            url: `${process.env.PUBLIC_URL}/${file.filename}`,
        };

        const data = await storageModel.create(fileData);

        res.send({ data });
    } catch (error) {
        handleHttpError(
            res,
            storageErrorMessages.createItem.errorName,
            storageErrorMessages.createItem.errorStatus
        );
        console.log({ error });
    }
};

/**
 * DELETE one item
 * @param {*} req
 * @param {*} res
 */
exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const dataFile = await storageModel.findByIdAndDelete(id);

        const { filename } = dataFile;

        const filePath = `${__dirname}/../storage/${filename}`;

        // We use this to delete from the storage folder
        fs.unlinkSync(filePath);

        const data = {
            filePath,
            deleted: true,
        };

        res.send({ data });
    } catch (error) {
        handleHttpError(
            res,
            storageErrorMessages.deleteItem.errorName,
            storageErrorMessages.deleteItem.errorStatus
        );
        console.log({ error });
    }
};
