/*import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {
showBurgerMenu = false;

hideMenu() {
  this.showBurgerMenu = !this.showBurgerMenu;
}

resetMenu() {
  this.showBurgerMenu = false;
}

}*/

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {
  @Output() MenuClosed = new EventEmitter<void>();

  hideMenu() {
    this.MenuClosed.emit();
  }
}

