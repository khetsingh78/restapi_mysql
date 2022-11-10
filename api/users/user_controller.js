
const { allUserData, registerUser, updateUser, DeleteUser, getLoginUser } = require('./user_services');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');
const { sign } = require('jsonwebtoken')


const usersData = (req, res) => {
    allUserData(null, (error, result) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                message: 'connetion error'
            })
        }
        return res.status(200).json({
            success: 1,
            data: result
        })
    })
}

const create_user = (req, res) => {
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);

    registerUser(body, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                success: 0,
                message: 'database connection error'
            })
        }
        return res.status(200).json({
            success: 1,
            data: result
        })
    })
}

const update_user = (req, res) => {
    const body = req.body;
    updateUser(body, (error, result) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                message: 'connetion error..'
            })
        }
        return res.status(200).json({
            success: 1,
            data: result
        })
    })

}

const delete_user = (req, res) => {
    const body = req.query.id;
    DeleteUser(body, (error, result) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                message: 'connetion error..'
            })
        }
        return res.status(200).json({
            success: 1,
            message: 'User is deleted successfully',
            data: result
        })
    })

}

const login_user = (req, res) => {
    let body = req.body;
    getLoginUser(body.email, (error, result) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                message: 'connetion error..'
            })
        }
        if (result == '') {
            return res.status(401).json({
                success: 0,
                message: 'Not found User',
            })
        }
        let results = bcrypt.compareSync(body.password, result[0].password);
        if (results) {
            result[0].password = 'undefined';
            const token = sign({ result: result[0] }, process.env.privateKey, {
                expiresIn: "2h"
            });
            return res.status(200).json({
                success: 1,
                message: "user is logged in",
                data: result[0],
                token: token
            })
        }
        // else{
        //     return res.status(200).json({
        //      success: 1,
        //      message : "user is logged in",
        //      data: result
        //     })
        // }

    })

}




module.exports = { usersData, create_user, update_user, delete_user, login_user }