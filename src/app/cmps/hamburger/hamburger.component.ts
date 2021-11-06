import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent {
  @Input() isMenuOpen:boolean = false
  @Output() toggleMenu = new EventEmitter<boolean>(false);
}
