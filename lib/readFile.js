const fs = require('fs');
const isJsFile = require('./isJsFile');
const exceptFiles = require('./exceptFiles');

function readFile(dir) {
  return fs
    .readdirSync(dir)
    .filter(isJsFile)
    .filter(exceptFiles);
}

module.exports = readFile;
