module.exports = function createShellWebpackConfig(devServerAppToOriginMap, config) {
  if (config.devServer) {
    config.devServer.proxy = {
      '/__child-app__': 'http://localhost:3000' // route apps chunks to different servers
    };
  }

  return config;
}
