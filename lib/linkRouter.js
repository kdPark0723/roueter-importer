const path = require('path');

function linkRouter(dirname, app) {
  return file => require(path.join(dirname, file))(app);
}

module.exports = linkRouter;
