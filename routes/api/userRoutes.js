const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    newUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend,
} =require('../../controllers/userController');