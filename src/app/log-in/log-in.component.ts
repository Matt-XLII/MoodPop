import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  username: string = '';
  password: string | any = '';
  isLinkVisited: boolean = true;
  isSignIn: boolean = false;
  settingsOut: boolean = true;

  @Output() SignIn = new EventEmitter<boolean>();


  onLinkClick() {
    this.isLinkVisited = true;
    alert("Very smart 👏, you should have noted that !")
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('You are logged in');
    } else {
      alert('Invalid credentials');
    }

  }
  onSignIn() {
    this.isSignIn = !this.isSignIn;
    this.SignIn.emit(this.isSignIn);
    this.isSignIn = false;
  }
  onSettings() {
    this.settingsOut = !this.settingsOut;
  }
}
