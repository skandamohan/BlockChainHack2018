const routes = require('./routes');
module.exports = function(app) {
  routes(app);
  // Other route groups could go here, in the future
};
