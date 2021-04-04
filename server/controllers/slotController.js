const {Slot} = require('../models/models');
const ApiError = require('../error/ApiError');

class SlotController {
    async saveSelectedSlot(req, res) {
        const {value} = req.body;
        const slot = await Slot.create({value});
        return res.json(slot);
    };

    async returnSelectedSlot(req, res) {
        const slots = await Slot.findAll();
        return res.json(slots);
    };
}

module.exports = new SlotController();
