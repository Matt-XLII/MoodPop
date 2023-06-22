import { Component} from '@angular/core';
import { FakeAPI } from '../fake-api/fake-api';

@Component({
  selector: 'app-angry',
  templateUrl: './angry.component.html',
  styleUrls: ['./angry.component.scss']
})
export class AngryComponent {

  clicked: boolean = false;
  timed: boolean = false;
  checked: boolean = false;
  checkedTimed: boolean = false;
  insultList = new FakeAPI().insultList;

quote: string = "";
insult: string = "";

isClicked() {
  if (this.checked === false){
    if (this.timed === false && this.clicked === false) {
      this.clicked = !this.clicked;
      setTimeout(() => {
        this.timed = !this.timed;
        this.insult = this.randomInsult();
      }, 750)} else {
        if (this.timed === true && this.clicked === true) {
          this.timed = !this.timed;
          this.clicked = !this.clicked;
          this.checked = true;
          setTimeout(() => {
            this.checkedTimed = !this.checkedTimed;
          }, 750)
          }

        }} else {}
  }

  randomInsult() {
    let random = Math.floor(Math.random() * this.insultList.length);
    return this.insultList[random];
  }
}



