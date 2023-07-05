import { Component, Output,EventEmitter, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit{
  constructor(public themeService : ThemeService,
    private router :Router) { } // Injecte le service

  isSignIn: boolean = false;
  stats: boolean = false;
  settingsOut: boolean = true;
  username: string = '';
  password: string | any = '';
  isLinkVisited: boolean = true;
  theme: string = 'female-theme'
  isDark : boolean = false;

  ngOnInit(): void {
  this.theme = this.themeService.theme;
  this.isDark = this.themeService.isDark;
  }

changeTheme() {
this.themeService.toggleTheme();
}

onMaleToggle() {
  this.themeService.changeTheme('male-theme');
  this.theme = this.themeService.theme;
}

onFemaleToggle() {
  this.themeService.changeTheme('female-theme');
  this.theme = this.themeService.theme;
}

onVeganToggle() {
  this.themeService.changeTheme('vegan-theme');
  this.theme = this.themeService.theme;
}

onSignIn(){
  this.isSignIn = !this.isSignIn;
  }


  onStats(){
    this.stats = !this.stats;

  }

  onSettings(){
    this.settingsOut = !this.settingsOut;
  }
  onLinkClick() {
    this.isLinkVisited = true;
    alert("Very smart 👏, you should have noted that !" )
  }

  login() {
    console.log('test');
    if (this.username === 'admin' && this.password === 'admin') {
      alert('You are logged in');
    } else {
      alert('Invalid credentials');
    }

  }
}


