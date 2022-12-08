const jwt = require('jsonwebtoken');

/**
 *
 * @param {*} userObj
 */
exports.tokenSign = async (userObj) => {
    const sign = jwt.sign(
        { _id: userObj.id, role: userObj.role },
        process.env.JWT_SECRET
    );

    return sign;
};

/**
 *
 * @param {*} tokenJwt
 * @returns
 */
exports.verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};
