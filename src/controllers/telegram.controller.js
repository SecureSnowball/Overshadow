const telegramService = require('../services/telegram.service');
const store = require('../util/store');

class TelegramController {
  static async webhookHandler(req, res) {
    const { logger } = store.getStore();
    try {
      logger.info({ input: req.body });
      const input = req.body;
      const chatId = input.message.chat_id;
      await telegramService.greet(chatId);
      return res.json({ message: 'Accepted' });
    } catch (e) {
      logger.fatal(e);
      return res.status(200).json({ message: `Unsupported type: ${e.message}` });
    }
  }
}

module.exports = TelegramController;
