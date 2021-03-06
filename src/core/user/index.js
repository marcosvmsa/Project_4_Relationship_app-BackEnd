const { Router } = require('express');
const Controller = require('./userController');

const router = Router();

router.get('/login', Controller.loginUser);
router.get('/search', Controller.selecUser);
router.post('/create', Controller.createUser);
router.post('/reset_password', Controller.resetPassword);
router.put('/update/:id', Controller.updateUser);
router.delete('/delete/:id', Controller.deleteUser);

module.exports = router;
