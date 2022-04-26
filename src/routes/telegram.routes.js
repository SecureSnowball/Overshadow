const express = require('express');
const telegramController = require('../controllers/telegram.controller');

const router = express.Router();

router.post('/webhook', telegramController.webhookHandler);

module.exports = router;
