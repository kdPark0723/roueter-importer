const path = require('path');

function exceptFiles(file) {
  const exceptList = ['index.js', 'config.js', 'util.js'];

  for (const item of exceptList) {
    if (path.basename(file).toLowerCase() === item) return false;
  }
  return true;
}

module.exports = exceptFiles;
