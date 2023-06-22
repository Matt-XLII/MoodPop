import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "MoodPop";
  showBurger = false;
  showProfileMenu = false;

  toggleBurger(event: boolean) {
    this.showBurger = event;
  }

  showProfile(event: boolean) {
    this.showProfileMenu = event;
  }

}
