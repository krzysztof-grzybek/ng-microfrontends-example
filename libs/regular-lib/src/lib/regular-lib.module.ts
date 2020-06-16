import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../../../apps/child-app/src/app/app.component';

@Component({
  selector: 'shell-component',
  template: 'here is the regular lib component',
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
  ]
})
export class RegularLibModule {}
