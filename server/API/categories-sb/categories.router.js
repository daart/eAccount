const router = require('express').Router();
const handler = require('./categories.controller');

router.route('/')
	.get(handler.getAll)
	.post(handler.create);
	
router.route('/types')
	.get(handler.getTypes);

router.route('/:id')
	.delete(handler.remove);
module.exports = router;