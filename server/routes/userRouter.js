const Router = require('express');
const userController = require('../controllers/userController');

const router = new Router();

router.post('/auth', userController.authorization);

module.exports = router;
