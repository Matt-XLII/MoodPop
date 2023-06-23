import { Component, Output,EventEmitter } from '@angular/core';
import { GenderthemesService } from '../genderthemes.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  constructor(private genderthemesService: GenderthemesService) { } // Injecte le service

  @Output() Theme = new EventEmitter<boolean>();
  isThemeWhite = false;

changeTheme() {
this.isThemeWhite = !this.isThemeWhite;
console.log('isThemeWhite:', this.isThemeWhite);
this.Theme.emit(this.isThemeWhite);
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

}
