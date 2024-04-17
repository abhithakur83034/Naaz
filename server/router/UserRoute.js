
const express = require('express');

const UserController = require('../controller/UserController');
const router = express.Router();

router.post('/register',UserController.userRegister);
router.post('/login',UserController.doLogin);
router.get('/get_all_users',UserController.getRegisteredUser);


module.exports = router;