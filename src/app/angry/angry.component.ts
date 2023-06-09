import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angry',
  templateUrl: './angry.component.html',
  styleUrls: ['./angry.component.scss']
})
export class AngryComponent implements OnInit{

  clicked: boolean = false;
  timed: boolean = false;
  checked: boolean = false;
  checkedTimed: boolean = false;

quote: string = "";

ngOnInit(): void {
  this.fetchQuote();
}

fetchQuote(): void {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then((data: any) => console.log(this.quote = data.value));
}

isClicked() {
  if (this.checked === false){
    if (this.timed === false && this.clicked === false) {
      this.clicked = !this.clicked;
      setTimeout(() => {
        this.timed = !this.timed;
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
}



