const express = require('express');
const TelegramController = require('../controllers/telegram.controller');

const router = express.Router();

router.post('/webhook', TelegramController.webhookHandler);

module.exports = router;
