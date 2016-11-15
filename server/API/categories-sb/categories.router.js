const router = require('express').Router();
const handler = require('./categories.controller');


router.route('/')
	.get(handler.getAll);

module.exports = router;