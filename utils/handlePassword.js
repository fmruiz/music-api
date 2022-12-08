const bcryptjs = require('bcryptjs');

/**
 * We use like parameter a password without encrypt
 * @param {*} passwordPlain
 */
exports.encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 8);

    return hash;
};

/**
 * We pass a password in plain text
 * and password encrypt
 * @param {*} passwordPlain
 * @param {*} hashPassword
 */
exports.compare = async (passwordPlain, hashPassword) => {
    const result = await bcryptjs.compare(passwordPlain, hashPassword);

    return result;
};
