const express = require('express');
const pageController = require('../controllers/pages.controller');

const router = express.Router();

router.get('/health', pageController.healthCheck);

module.exports = router;
