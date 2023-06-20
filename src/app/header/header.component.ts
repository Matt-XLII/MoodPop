import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})

export class HeaderComponent {
  @Output() Toggle = new EventEmitter<boolean>();
  isMenuOpen = false;

  toggleMenu(bool: boolean) {
    bool = !bool;
    this.Toggle.emit(bool)
  }




}
