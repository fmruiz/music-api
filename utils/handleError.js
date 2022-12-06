/**
 *  HTTP Errors
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
exports.handleHttpError = (
    res,
    message = 'Something is wrong...',
    code = 403
) => {
    res.status(code);
    res.send({ error: message });
};
