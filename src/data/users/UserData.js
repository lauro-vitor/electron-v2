const createUser = require('./createUser');
const getByIdUser = require('./getByIdUser');
const getAllUsers = require('./getAllUsers');
const updateUser = require('./updateUser');
const destroyUser = require('./destroyUser');

const UserData = {
    createUser,
    getByIdUser,
    getAllUsers,
    updateUser,
    destroyUser
};

module.exports = UserData;