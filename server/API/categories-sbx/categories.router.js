const router = require('express').Router();
const controller = require('./categories.controller');

router.route('/')
	.get(controller.getAll)
	.post(controller.create);
	
router.route('/:id')
	.get(controller.getOne)
	.put(controller.updateOne)
	.delete(controller.remove)
module.exports = router;