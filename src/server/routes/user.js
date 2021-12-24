const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user');
const Middleware = require('../../middleware');

router.get('/', [Middleware.verifyToken, Middleware.checkRequestLimit], UserController.getUser);
router.post('/', UserController.createUser);
router.post('/chuck-norris', [Middleware.verifyToken, Middleware.checkRequestLimit], UserController.getChuckNorrisText);
router.post('/login', UserController.userLogin);

module.exports = router;
