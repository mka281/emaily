const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/survey', requireLogin,  (req, res) => {});
};
