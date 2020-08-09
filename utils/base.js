const homeDir = require('osenv').home();
const path = require('path');
const chalk = require('chalk');
// 跨平台
const tplDir = path.resolve(homeDir, '.vGenerators');

function getGenPath() {
  return tplDir;
}

function sendConsle(data, color = 'yellow') {
  const fn = chalk[color] || chalk.yellow;
  console.log(fn(data));
}

module.exports = {
  getGenPath,
  sendConsle,
};
