const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const { usersData, create_user, update_user, delete_user, login_user } = require('./user_controller');
const token_validation = require('../../auth/token_validation');
//get user data from database
router.get('/', token_validation, usersData);

//registered user data in database
router.post('/register_user', create_user);

//update user data in database
router.put('/update_user', token_validation, update_user);

//delete user data in database
router.delete('/user_delete', token_validation, delete_user);

router.get('*', (req, res) => {
    res.json({
        status: 404,
        message: "Page Not Found",
        result: "Request is not valid"
    })
});

//login user by email and password and generate json token to call all the router apis.
router.post('/login', login_user);

module.exports = router;
