import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: AppComponent,
    }, {
      path: 'lazy-loaded-path-in-lazy-loaded-app',
      loadChildren: () => import('@my-attempt/regular-lib').then(m => m.RegularLibModule),
    }])
  ],
  providers: [],
})
export class AppModule {}
