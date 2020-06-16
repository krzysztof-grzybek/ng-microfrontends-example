import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyFeatureModuleModule } from '@my-attempt/my-feature-module';

@Component({
  selector: 'shell-component',
  template: 'here is the regular lib component, with loaded non-lazy feature-module: <my-attempt-alert></my-attempt-alert>',
})
export class LibComponent {
  title = 'lib';
}

@NgModule({
  declarations: [LibComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LibComponent,
    }]),
    MyFeatureModuleModule,
  ]
})
export class RegularLibModule {}
