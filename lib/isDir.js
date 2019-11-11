const path = require('path');
const fs = require('fs');

function isDir(dirname, file) {
  const stat = fs.statSync(path.join(dirname, file));

  return stat.isDirectory();
}

module.exports = isDir;
