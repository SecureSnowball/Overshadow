const telegramService = require('../services/telegram.service');

class TelegramController {
  constructor() {
    this.service = telegramService;
  }

  async webhookHandler(req, res) {
    const input = req.body;
    await this.service.greet(input.message.chat_id);
    return res.json({ message: 'Accepted' });
  }
}

module.exports = new TelegramController();
