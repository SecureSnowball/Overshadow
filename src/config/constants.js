module.exports = {
  port: process.env.PORT || 3000,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  appName: process.env.APP_NAME,
  appSecret: process.env.APP_SECRET,
  mongoDbUrl: process.env.MONGODB_URI,
};
