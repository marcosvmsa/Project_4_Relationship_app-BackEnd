const { Router } = require('express');
const Controller = require('./userController');

const router = Router();

router.post('/', Controller.createUser);

module.exports = router;
