const createShellWebpackConfig = require('../../tools/createShellWebpackConfig');

module.exports = (config) => createShellWebpackConfig({
  '/__child-app__': 'http://localhost:3000'
}, config);
