global.Promise = require('bluebird');

const { isExecutablePresent } = require('@cs1193/blitz-lib-utilities');

const isTerraformPresent = () => {
  return new Promise((resolve, reject) => {
    isExecutablePresent('terraform', ['--version'])
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  isTerraformPresent
};
