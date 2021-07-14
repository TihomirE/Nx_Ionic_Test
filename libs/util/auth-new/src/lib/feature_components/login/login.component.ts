import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-test-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) { }
  
  navigate() {
    this.router.navigate(['home']);
  }

}
