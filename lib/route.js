module.exports = function(app) {
  app.get('/api/whoami/', app.api.whoami);
}
