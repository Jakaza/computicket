const router = require('express').Router();
const authRoutes = require('./auth');
const eventRoutes = require('./event');
// auth routes
router.use('/auth', authRoutes);
router.use('/event', eventRoutes);

module.exports = router;