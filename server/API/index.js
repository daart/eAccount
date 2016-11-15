const router = require('express').Router();
const auth = require('./auth/auth.router');
const categories = require('./categories/categories.router');
// categories sandbox
const categories_sb = require('./categories-sb/categories.router');

router.use('/auth', auth);
router.use('/categories', categories);

router.use('/categories_sb', categories_sb);

module.exports = router;