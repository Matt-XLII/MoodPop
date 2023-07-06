import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';


@Component({
  selector: 'app-unmotivated',
  templateUrl: './unmotivated.component.html',
  styleUrls: ['./unmotivated.component.scss'],
})
export class UnmotivatedComponent implements OnInit {
  quote: string = '';
  autor: string = '';
  clicked = false;
  timed = false;
  checked = false
  checkedTimed = false;
  theme!: string;
  imageSource!: string;

  constructor(private themeService: ThemeService) { } // Injecte le service


  ngOnInit(): void {
    this.fetchQuote();


    this.theme = this.themeService.theme;
    if (this.theme === 'male-theme') {
      this.imageSource = "assets/TristeH2.jfif";
    } else if (this.theme === 'female-theme') {
      this.imageSource = "assets/TristeF3.jfif";
    } else if (this.theme === 'vegan-theme') {
      this.imageSource = 'assets/VeganTristeF2.jfif';
    } else {
      this.imageSource = "assets/TristeF3.jfif";
    }
  };


  fetchQuote(): void {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then((data: any) => this.quote = data.value);
  }




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

  redirectToPage() {
    window.open('https://www.instagram.com/accounts/login/', '_blank');
  }
}
