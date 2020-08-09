const { execSync } = require('child_process');
const mkdirp = require('mkdirp');
const { getGenPath, sendConsle } = require('./base');

module.exports = async function (pkgName) {
  const generatorPath = getGenPath();

  await mkdirp(generatorPath);

  try {
    execSync(`npm i ${pkgName}@latest -S --registry=https://registry.npm.taobao.org`, { cwd: generatorPath });
  } catch (e) {
    sendConsle(`安装失败，请检查包名称是否正确 ${pkgName}`, 'red');
    console.log(e);
  }
};
