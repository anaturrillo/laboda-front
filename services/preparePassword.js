require('../lib/SHA256');


module.exports = function (pwd) {
  return SHA256(pwd)
};