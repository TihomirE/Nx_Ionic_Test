import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mobile-test-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss']
})
export class GoToComponent {

  @Output() navigation: EventEmitter<null> = new EventEmitter<null>();

  navigate() {
    this.navigation.emit();
  }

}
