const rp = require('request-promise');

module.exports = function (token) {
  const options = {
    method: 'POST',
    uri: 'http://localhost:8000/api/gifts',
    body: {
      token: token
    },
    json: true
  };

  return rp(options)
};