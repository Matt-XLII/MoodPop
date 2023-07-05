

import { Component } from '@angular/core';

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


  onLinkClick() {
    this.isLinkVisited = true;
    alert("Very smart 👏, you should have noted that !" )
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('You are logged in');
    } else {
      alert('Invalid credentials');
    }

  }
  onSignIn(){
    this.isSignIn = !this.isSignIn;
    }
    onSettings(){
      this.settingsOut = !this.settingsOut;
    }
}
