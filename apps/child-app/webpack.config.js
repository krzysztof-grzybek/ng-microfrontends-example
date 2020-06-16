// const ModifyChunkIdPlugin = require('modify-chunk-id-webpack-plugin');

module.exports = (config) => {
  // console.log(config)
  config.externals = {
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

  // delete config.entry.polyfills;
  // delete config.entry.styles;
  // config.optimization.chunkIds = false;
  // delete config.optimization.splitChunks;
  // config.plugins.push(
  //   new ModifyChunkIdPlugin({ random: true }),
  //   // other plugins
  // );

  config.optimization.runtimeChunk = false;
  config.output.jsonpFunction = 'childModuleWebpackJsonP';
  return config;
};
