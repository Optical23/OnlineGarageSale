const router = require('express').Router();
const userRoutes = require('./user-routes');
const storeRoutes = require('./store-routes');

router.use('/user', userRoutes);
router.use('/store', storeRoutes);

module.exports = router;