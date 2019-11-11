const _ = require('lodash');
const isDir = require('./isDir');
const fs = require('fs');


function readDir(dir) {
  return fs
    .readdirSync(dir)
    .filter(
      _.curry(isDir)(dir),
    );
}

module.exports = readDir;
