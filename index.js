require('dotenv').config();
const express = require('express');
const { v4: uuid } = require('uuid');
const { port } = require('./src/config/constants');
const logger = require('./src/util/logger');

// Routes imports
const telegramRoute = require('./src/routes/telegram.routes');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  req.id = uuid();
  res.set('X-Request-Id', req.id);
  return next();
});

// Routes registration
app.use('/api/telegram', telegramRoute);

// 404 handler
app.use((_, res) => {
  res.status(404).json({ message: "Sorry can't find that!" });
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
