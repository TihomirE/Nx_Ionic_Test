import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MylibraryModule } from '@mobile-test/mylibrary';
import { LoginComponent } from './feature_components/login/login.component';
import { LogoutComponent } from './feature_components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    MylibraryModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', pathMatch: 'full', component: LoginComponent },
      { path: 'logout', pathMatch: 'full', component: LogoutComponent }
    ]),
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ]
})
export class UtilAuthNewModule {}
