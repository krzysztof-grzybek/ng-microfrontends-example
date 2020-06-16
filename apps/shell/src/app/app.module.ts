import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { loadApp } from './loadApp';
import { ShellComponent } from './components/shell.component';



@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    RouterModule.forChild([{
          path: 'shell-app-path',
          component: ShellComponent,
        },
        {
          path: 'child-app',
          loadChildren: () => loadApp('child-app')
        }

  ])],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
