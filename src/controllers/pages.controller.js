const store = require('../util/store');

class PageController {
  // eslint-disable-next-line class-methods-use-this
  async healthCheck(req, res) {
    try {
      const { logger } = store.getStore();
      logger.info('Health endpoint called');
      return res.json({ message: 'Up & running' });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new PageController();
