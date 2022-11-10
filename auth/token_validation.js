const { verify } = require('jsonwebtoken');

const token_validation = (req, res, next) => {
    let token = req.get('authorization');
    if (token) {
        token = token.slice(7);
        verify(token, process.env.privateKey, (err, decode) => {
            if (err) {
                res.json({
                    success: 0,
                    message: "invalid token"
                })
            } else {
                next();
            }
        });
    } else {
        return res.status(500).json({
            success: 0,
            message: 'Token is not valid'
        })
    }

}

module.exports = token_validation;