const router = require('express').Router();
const controller = require('./auth.controller');

router.post('/signin', controller.signin );
router.post('/register', controller.register );
router.get('/users', controller.users);
// router.post('/', controller.auth);

module.exports = router;