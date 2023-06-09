
import { Component, Output, EventEmitter, Input } from '@angular/core';
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
  @Output() SignIn = new EventEmitter<boolean>();
  @Input() isMenuOpen = false;

  isProfileOpen = false;
  isSignIn: boolean = false;
  isLinkVisited: boolean = true;
  settingsOut: boolean = true;
  username: string = '';
  password: string | any = '';



  onSignIn(event: boolean) {
    this.isSignIn = event;
    this.SignIn.emit(this.isSignIn);
  }

  onLinkClick() {
    this.isLinkVisited = true;
  }
  onSettings() {
    this.settingsOut = !this.settingsOut;
  }
  login() {
    console.log('test');
    if (this.username === 'admin' && this.password === 'admin') {
      alert('You are logged in');
    } else {
      alert('Invalid credentials');
    }

  }

  closeMenuProfile() {
    this.isMenuOpen = false;
    this.isProfileOpen = false;
    this.Profile.emit(false);
    this.Toggle.emit(false);
  }

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
  toHome() {
    this.Router.navigateByUrl('');
    this.closeMenuProfile()
  }

  toBored() {
    this.Router.navigateByUrl('/bored');
    this.closeMenuProfile()
  }
  toHappy() {
    this.Router.navigateByUrl('/happy');
    this.closeMenuProfile()
  }
  toUnmotivated() {
    this.Router.navigateByUrl('/unmotivated');
    this.closeMenuProfile()
  }
  toAngry() {
    this.Router.navigateByUrl('/angry');
    this.closeMenuProfile()
  }

}
