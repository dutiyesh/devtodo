const path = require('path');

function joinPath(pathname) {
  return path.join(__dirname, '..', pathname);
}

const APP_DIR = joinPath('app');

const PATH = {
  ROOT: joinPath(''),
  APP: APP_DIR,
  EXTENSION: APP_DIR + '/extension',
  WEB: APP_DIR + '/web',
  SOURCE: APP_DIR + '/src',
  STYLE: APP_DIR + '/style',
  ASSETS: APP_DIR + '/assets',
  DIST: joinPath('dist')
}

module.exports = PATH;
