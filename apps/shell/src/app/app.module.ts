import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@Component({
  selector: 'shell-component',
  template: 'here is the shell component',
})
export class ShellComponent {
  title = 'shell';
}

const moduleMap = {};
export function loadModule(umdFileName: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {

    if (moduleMap[umdFileName]) {
      resolve(window);
      return;
    }
    const script = document.createElement('script');
    script.src = umdFileName;

    script.onerror = reject;

    script.onload = () => {
      moduleMap[umdFileName] = true;
      resolve(window); // window is the global namespace
    }

    document.body.append(script);
  });
}



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
          loadChildren: () => {
            return loadModule('child-app_main-es2015.js').then(g => {
              console.log(g.childApp);
              return g.childApp;
              // return null
            })
          }
        }

  ])],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
