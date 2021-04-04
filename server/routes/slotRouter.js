const Router = require('express');
const slotController = require('../controllers/slotController');

const router = new Router();

router.post('/timeslot', slotController.saveSelectedSlot);
router.get('/timeslot', slotController.returnSelectedSlot);

module.exports = router;
