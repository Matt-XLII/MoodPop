import { Component,} from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "MoodPop";
  showBurger :boolean = false;
  showProfileMenu :boolean = false;
  whiteTheme :boolean = false;
  SignIn : boolean = false; 

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

  onSignIn(event: boolean) {
    this.SignIn = event;
  }

}
