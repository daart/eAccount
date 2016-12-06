const router = require('express').Router();
const auth = require('./auth/auth.router');
const categories = require('./categories/categories.router');
// categories sandbox
// const categories-sbx = require('./categories/categories.router');
// router.use('/categories-sbx ', categories-sbx );

router.use('/categories', categories);

router.use('/auth', auth);


module.exports = router;