import { Component, Output,EventEmitter } from '@angular/core';
import { GenderthemesService } from '../genderthemes.service';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  constructor(private genderthemesService: GenderthemesService ,
    public themeService : ThemeService,
    private router :Router) { } // Injecte le service

  isSignIn: boolean = false;
  stats: boolean = false;
  settingsOut: boolean = true;
  username: string = '';
  password: string | any = '';
  isLinkVisited: boolean = true;


changeTheme() {
this.themeService.toggleTheme();
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
    alert("very smart 👏, you should have noted that !" )
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


