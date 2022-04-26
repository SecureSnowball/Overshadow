require('dotenv').config();
const express = require('express');
const { v5: uuid } = require('uuid');
const { port } = require('./src/config/constants');
const logger = require('./src/util/logger');

// Routes imports
const telegramRoute = require('./src/routes/telegram.routes');

const app = express();

app.use(express.json());
app.use((req, _, next) => {
  req.id = uuid();
  return next();
});

// Routes registration
app.use('/api/telegram', telegramRoute);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
