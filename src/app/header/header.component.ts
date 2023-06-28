
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private Router: Router) { }
  @Output() Toggle = new EventEmitter<boolean>();
  @Output() Profile = new EventEmitter<boolean>();
  isMenuOpen = false;
  isProfileOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.Toggle.emit(this.isMenuOpen);
    this.isProfileOpen = false;
    this.Profile.emit(this.isProfileOpen);
  }
  showProfile() {
    this.isProfileOpen = !this.isProfileOpen;
    this.Profile.emit(this.isProfileOpen);
    this.isMenuOpen = false;
    this.Toggle.emit(this.isMenuOpen);
  }
toHome(){
  this.Router.navigateByUrl('');
}

}
