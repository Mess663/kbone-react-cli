const minimis = require('minimist');
const yoemanEnv = require('yeoman-environment').createEnv();
const resolveFrom = require('resolve-from').silent;
const install = require('./utils/install');
const { getGenPath, sendConsle } = require('./utils/base');

const argv = minimis(process.argv.slice(2));

async function main() {
  sendConsle('下载模版中...');
  await install('generator-kreact');
  sendConsle('下载完成，开始安装', 'green');

  yoemanEnv.register(resolveFrom(getGenPath(), 'generator-kreact'), 'kreact');
  yoemanEnv.run(['kreact'], (e, d) => {
    if (d) console.log('happy coding', 'green');
  });
}

main(argv);
