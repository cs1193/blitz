global.Promise = require('bluebird');

const spawn = require('cross-spawn');

const isExecutablePresent = (command, args = [], options) => {
  const child = spawn(command, args);

  return new Promise((resolve, reject) => {
    child.on('error', (err) => {
      reject(`${command} ${args.join(' ')} failed with error`);
      return;
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(`${command} ${args.join(' ')} failed with exit code ${code}`);
        return;
      }
      resolve();
    });
  });
};

module.exports = {
  isExecutablePresent
};
