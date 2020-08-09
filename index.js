const minimis = require('minimist');
const yoemanEnv = require('yeoman-environment').createEnv();
const resolveFrom = require('resolve-from').silent;
const inquirer = require('inquirer');
const install = require('./utils/install');
const { getGenPath, sendConsle } = require('./utils/base');

const argv = minimis(process.argv.slice(2));

async function main() {
  const { generator } = await inquirer.prompt({
    message: '请选择一个模板：', type: 'list', name: 'generator', choices: ['generator-kreact'],
  });

  sendConsle('下载模版中...');
  await install(generator);
  sendConsle('下载完成，开始安装', 'green');

  yoemanEnv.register(resolveFrom(getGenPath(), generator), 'kreact');
  yoemanEnv.run(['kreact'], (e, d) => {
    if (d) console.log('happy coding', 'green');
  });
}

main(argv);
