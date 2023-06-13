import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unmotivated',
  templateUrl: './unmotivated.component.html',
  styleUrls: ['./unmotivated.component.scss'],
})
export class UnmotivatedComponent implements OnInit {
  quote: string = '';
  autor: string = '';

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data: any) => console.log(this.quote = data.value));
  }
  // fetchQuote(): void {
  //   fetch(`https://api.goprogram.ai/inspiration/?${Math.random() * 200}`)
  //     .then((response) => response.json())
  //     .then((data) => (this.quote = data.quote + ' - ' + data.author));
  //     console.log(this.quote);
  // }

  clicked = false;
  timed = false;
  checked = false
  checkedTimed = false;

  isClicked() {
    if (this.checked === false) {
      if (this.timed === false && this.clicked === false) {
        this.clicked = !this.clicked;

        setTimeout(() => {
          this.timed = !this.timed;
        }, 750);
      } else {
        if (this.timed === true && this.clicked === true) {
          this.timed = !this.timed;

          this.clicked = !this.clicked;

          this.checked = true;

          setTimeout(() => {
            this.checkedTimed = !this.checkedTimed;
          }, 750);
        }
      }
    } else {
    }
  }
}
