const chalk = require('chalk');
const figlet = require('figlet');

module.exports = (packageName, version, company, text, textOptions) => {
  const art = figlet.textSync(text, textOptions || {
    font: 'Standard'
  });

  console.log(
    `
      \n${chalk.green(art)}
      \n${chalk.bold(packageName + ' version ' + version)}
      \nCopyright (C) ${company}. All rights reserved.
    `
  )
};
