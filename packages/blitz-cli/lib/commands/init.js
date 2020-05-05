const splash = require('@cs1193/blitz-core/lib/splash');

const PACKAGE = require('../../package.json');


const main = async args => {
  splash('blitz', PACKAGE.version, 'cs1193', 'blitz', {
    font: 'Standard'
  })
}

module.exports = {
  command: 'init',
  describe: 'To init the blitz-cli',
  handler: main
};
