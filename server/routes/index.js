const Router = require('express');
const userRouter = require('./userRouter');
const slotRouter = require('./slotRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/slot', slotRouter);

module.exports = router;
