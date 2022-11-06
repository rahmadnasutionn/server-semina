const express = require('express');
const router = express();

const { activeParticipant, getAllLandingPage, getAllPayment, getDetailLandingPage, checkout, signin, signup, getDashboard } = require('./controller');
const { authenticateParticipant } = require('../../../middleware/auth');

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);
router.get('/events', getAllLandingPage);
router.get('/events/:id', getDetailLandingPage);
router.get('/orders', authenticateParticipant, getDashboard);
router.post('/checkout', authenticateParticipant, checkout);

module.exports = router;