const telegramService = require('../services/telegram.service');
const store = require('../util/store');

class TelegramController {
  constructor() {
    this.service = telegramService;
  }

  async webhookHandler(req, res) {
    try {
      const { logger } = store.getStore();
      logger.info(req.body);
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
