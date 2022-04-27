const axios = require('axios');
const store = require('../util/store');
const { appName, telegramBotToken } = require('../config/constants');

class TelegramService {
  constructor() {
    const baseURL = `https://api.telegram.org/bot${telegramBotToken}`;

    // Create an HTTP client to use for all communication with TG.
    this.client = axios.create({
      baseURL,
    });
  }

  async greet(chatId) {
    const { logger } = store.getStore();
    logger.info(`Sending message to ${chatId}`);
    return this.client.post('/sendMessage', {
      chat_id: chatId,
      text: `Hello!, I am ${appName}, I can take backup of your data. PS: I am not a mirror bot`,
    });
  }
}

module.exports = new TelegramService();
