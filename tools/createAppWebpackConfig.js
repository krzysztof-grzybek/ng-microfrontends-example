module.exports = function createAppWebpackConfig(appName, config) {
  config.externals = { // we will load common deps from window exposed by shell app
    rxjs: 'rxjs',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/common/http': 'ng.common.http',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    '@angular/compiler': 'ng.compiler',
    '@angular/animations': 'ng.animations',
    '@angular/elements': 'ng.elements',
    '@angular/router': 'ng.router',
    '@angular/forms': 'ng.forms',
  };

  delete config.entry.polyfills; // we have it in shell app
  delete config.entry.styles;  // global styles will be available only in shell app
  config.optimization.runtimeChunk = false; // each child app will contain webpack runtime in its chunk. We want to avoid overhead on loading multiple scripts for caching cost
  config.output.jsonpFunction = `${appName}WebpackJsonP`; // avoid collisions with other apps
  config.output.filename = `__${appName}__[name].js`; // we want to differentiate chunks on shell proxy dev server. this prefix will allow that

  if (config.devServer) {
    config.devServer.liveReload = false; // TODO: figure out how to do this
  }
  delete config.optimization.splitChunks.cacheGroups.vendor // we want to avoid overhead on loading multiple scripts for caching cost
  return config;
}
