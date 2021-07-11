import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CancelButtonComponent,
    SubmitButtonComponent
  ],
  exports: [
    SubmitButtonComponent
  ],
})
export class MylibraryModule {}
