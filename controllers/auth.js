/**
 * User model
 */
const { usersModel } = require('../models');

/**
 * Auth utils
 */
const { tokenSign } = require('../utils/handleJwt');
const { encrypt } = require('../utils/handlePassword');

/**
 * Register controller
 * @param {*} req
 * @param {*} res
 */
exports.postRegister = async (req, res) => {
    const body = req.body;
    const password = await encrypt(body?.password);
    const data = { ...body, password };
    const result = await usersModel.create(data);

    const finalData = {
        token: await tokenSign(result),
        user: result,
    };

    res.send({ finalData });
};
