const telegramService = require('../services/telegram.service');

class TelegramController {
  constructor() {
    this.service = telegramService;
  }

  async webhookHandler(req, res) {
    try {
      const input = req.body;
      const chatId = input.message.chat_id;
      await this.service.greet(chatId);
      return res.json({ message: 'Accepted' });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new TelegramController();
