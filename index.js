require('dotenv').config();
const express = require('express');
const { v4: uuid } = require('uuid');
const { port } = require('./src/config/constants');
const logger = require('./src/util/logger');
const store = require('./src/util/store');

// Routes imports
const telegramRoute = require('./src/routes/telegram.routes');
const pagesRoute = require('./src/routes/pages.routes');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const requestId = uuid();
  req.id = requestId;
  res.set('X-Request-Id', requestId);
  const requestLogger = logger.child({ requestId });
  return store.run({ logger: requestLogger }, next);
});

// Routes registration
app.use('/api/telegram', telegramRoute);
app.use('/api', pagesRoute);

// 404 handler
app.use((_, res) => {
  res.status(404).json({ message: "Sorry can't find that!" });
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
