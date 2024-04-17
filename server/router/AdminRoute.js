const express = require('express');

const adminController = require('../controller/AdminController')

const router = express.Router();

router.post("/adminlogin",adminController.doLogin)
// router.get("/adminshow",adminController.adminshow)

module.exports = router;