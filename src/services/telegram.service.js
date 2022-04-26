const axios = require('axios');
const { appName, telegramBotToken } = require('../config/constants');

class TelegramService {
  constructor() {
    const baseUrl = `https://api.telegram.org/bot${telegramBotToken}`;

    // Create an HTTP client to use for all communication with TG.
    this.client = axios.create({
      baseUrl,
    });
  }

  greet(chatId) {
    return this.client.get('/sendMessage', {
      chat_id: chatId,
      text: `Hello!, I am ${appName}, I can take backup of your data. PS: I am not a mirror bot`,
    });
  }
}

module.exports = new TelegramService();
