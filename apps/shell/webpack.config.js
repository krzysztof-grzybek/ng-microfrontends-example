module.exports = (config) => {
  config.devServer.proxy = {
    '/__child-app__': 'http://localhost:3000'
  };

  return config;
}
