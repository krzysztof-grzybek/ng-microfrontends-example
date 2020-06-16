declare function require(name: string);

export function exposeVendors() {
  (window as any).ng = {};
  (window as any).rxjs = require('rxjs');
  (window as any).ng.core = require('@angular/core');
  (window as any).ng.forms = require('@angular/forms');
  (window as any).ng.common = require('@angular/common');
  (window as any).ng.router = require('@angular/router');
  (window as any).ng.compiler = require('@angular/compiler');
  (window as any).ng.platformBrowser = require('@angular/platform-browser');
  (window as any).ng.platformBrowserDynamic = require('@angular/platform-browser-dynamic');
}
