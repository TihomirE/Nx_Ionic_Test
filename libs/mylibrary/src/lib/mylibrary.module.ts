import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { GoToComponent } from './go-to/go-to.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CancelButtonComponent,
    SubmitButtonComponent,
    LoginComponentComponent,
    GoToComponent
  ],
  exports: [
    SubmitButtonComponent,
    LoginComponentComponent,
    GoToComponent
  ],
})
export class MylibraryModule {}
