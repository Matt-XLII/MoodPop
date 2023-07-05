import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { GenderthemesService } from '../genderthemes.service';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit{
  constructor(public genderthemesService: GenderthemesService ,
    public themeService : ThemeService,
    private router :Router) { } // Injecte le service

  isSignIn: boolean = false;
  stats: boolean = false;
  settingsOut: boolean = true;
  username: string = '';
  password: string | any = '';
  isLinkVisited: boolean = true;

  ngOnInit(): void {
    this.genderthemesService.theme = this.genderthemesService.theme;
  }

changeTheme() {
this.themeService.toggleTheme();
console.log("@@@@@@@@@@@@@@@",this.themeService.isDark);
}

onMaleToggle() {
  this.genderthemesService.changeTheme('male-theme');
}

onFemaleToggle() {
  this.genderthemesService.changeTheme('female-theme');
}

onVeganToggle() {
  this.genderthemesService.changeTheme('vegan-theme');
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


