/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "MoodPop"

showBurger = false;

toggleBurger (event : boolean) {
this.showBurger = event;
}

resetBurgerMenu() {
  this.showBurger = false;
}

}*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "MoodPop";
  showBurger = false;

  toggleBurger(event: boolean) {
    this.showBurger = event;
  }

  resetBurgerMenu() {
    this.showBurger = false;
  }
}
