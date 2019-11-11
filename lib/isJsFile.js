const path = require('path');

function isJsFile(file) {
  return path.extname(file).toLowerCase() === '.js';
}

module.exports = isJsFile;
