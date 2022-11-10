const pool = require('../config/database');

const allUserData = (data, callback) => {
    pool.query(`SELECT * FROM user_registration`, (error, result, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, result);
    });
};

const registerUser = (data, callback) => {
    pool.query(`INSERT INTO user_registration (name, email, gender, password) VALUES (?,?,?,?)`,
        [
            data.name,
            data.email,
            data.gender,
            data.password
        ],
        (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        });
};

const updateUser = (data, callback) => {
    pool.query('UPDATE user_registration SET name= ?, email=?, gender=? WHERE id=?',
        [
            data.name,
            data.email,
            data.gender,
            data.id
        ],
        (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        })
}

const DeleteUser = (data, callback) => {
    pool.query('DELETE FROM `user_registration` WHERE id = ?',
        [
            data
        ],
        (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        })
}

const getLoginUser = (data, callback) => {
    pool.query('select * from user_registration where email = ?',
        [data],
        (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        }
    )
}


module.exports = { allUserData, registerUser, updateUser, DeleteUser, getLoginUser };