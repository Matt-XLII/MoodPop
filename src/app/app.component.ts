import { Component,} from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "MoodPop";
  showBurger = false;
  showProfileMenu = false;
  whiteTheme = false;

constructor(public themeService : ThemeService) {}

changeTheme() {
this.themeService.toggleTheme();
}

  toggleBurger(event: boolean) {
    this.showBurger = event;
  }

  showProfile(event: boolean) {
    this.showProfileMenu = event;
  }

  themeSwitch(event: boolean) {
this.whiteTheme = event;
  }



}
