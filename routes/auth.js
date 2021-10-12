const express = require('express');
const router = express.Router();
const userController = require('../controller/login')

/* GET Login Index page */
router.get('/', userController.index)

/* Login Post */
router.post('/', userController.login)

module.exports = router;
