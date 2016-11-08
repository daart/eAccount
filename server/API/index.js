const router = require('express').Router();
const auth = require('./auth/auth.router');
const categories = require('./categories/categories.router');

router.use('/auth', auth);
router.use('/categories', categories);

module.exports = router;