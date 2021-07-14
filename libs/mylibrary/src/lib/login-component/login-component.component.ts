import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-test-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {

  constructor(
    private router: Router
  ) { }

  navigate() {
    this.router.navigate(['home']);
  }

}
