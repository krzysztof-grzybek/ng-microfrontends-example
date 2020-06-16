import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { exposeVendors } from './shell-utils/expose-vendors';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

exposeVendors();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
