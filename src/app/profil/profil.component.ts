import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  @Output() Theme = new EventEmitter<boolean>();
  isThemeWhite = false;

changeTheme() {
this.isThemeWhite = !this.isThemeWhite;
this.Theme.emit(this.isThemeWhite);
}

}

