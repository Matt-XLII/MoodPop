import { Component, OnInit } from '@angular/core';
import { HappyService } from '../services/happy.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.scss']
})
export class HappyComponent implements OnInit{

joke : string[] = [];
clicked = false;
timed = false;
checked = false;
checkedTimed = false;
theme!: string;
imageSource!: string;

constructor(private themeService: ThemeService,
  private HappyService: HappyService) { } // Injecte le service

ngOnInit(): void {
  this.HappyService.fetchData(this.joke);

  this.theme = this.themeService.theme;
    if (this.theme === 'male-theme') {
      this.imageSource = "assets/HeureuxH1.jpg";
    } else if (this.theme === 'female-theme') {
      this.imageSource = "assets/CartoonHeureuxF1.jpg";
    } else if (this.theme === 'vegan-theme') {
      this.imageSource = 'assets/VeganHeureuxF3.jfif';
    } else {
      this.imageSource = "assets/CartoonHeureuxF1.jpg";
    }
  };





isClicked() {
  if (this.checked===false){
    if (this.timed===false && this.clicked===false) {
      this.clicked = !this.clicked;
      setTimeout(() => {
        this.timed =!this.timed;
      },750)} else {
        if (this.timed===true && this.clicked===true) {
          this.timed =!this.timed;
          this.clicked =!this.clicked;
          this.checked = true;
          setTimeout(() => {
            this.checkedTimed =!this.checkedTimed;
          },750)
        }
      }} else {}
    }

    redirectToPage() {
      window.open('https://www.instagram.com/accounts/login/', '_blank');
    }

}










