const express = require('express');
const router = express.Router();
const userController = require('../controller/login')

router.get('/login', userController.index)
router.post('/login', userController.login)

module.exports = router;
