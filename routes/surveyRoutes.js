const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
  app.post('/api/survey', requireLogin, requireCredits, (req, res) => {});
};
