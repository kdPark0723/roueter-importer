const readFile = require('./readFile');
const readDir = require('./readDir');
const linkRouter = require('./linkRouter');

function setRouter(app, dirname) {
  readFile(dirname).forEach(linkRouter(dirname, app));
  readDir(dirname).forEach(linkRouter(dirname, app));
}

module.exports = setRouter;
