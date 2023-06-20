import { Component } from '@angular/core';

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


}
