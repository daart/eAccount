const router = require('express').Router();
const handler = require('./categories.controller');

router.route('/')
	.get(handler.getAll)
	.post(handler.create);

router.route('/:id')
	.get(handler.getOne)
	.put(handler.update)
	.delete(handler.remove);
	
module.exports = router;