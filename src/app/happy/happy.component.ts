import { Component, OnInit } from '@angular/core';
import { GenderthemesService } from '../genderthemes.service';
import { HappyService } from '../services/happy.service';

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

constructor(private genderthemesService: GenderthemesService,
  private HappyService: HappyService) { } // Injecte le service

ngOnInit(): void {
  this.HappyService.fetchData(this.joke);

    this.genderthemesService.theme$.subscribe(theme => {
    this.theme = theme;
    if (theme === 'male-theme') {
      this.imageSource = "assets/HeureuxH1.jpg";
    } else if (theme === 'female-theme') {
      this.imageSource = "assets/CartoonHeureuxF1.jpg";
    } else if (theme === 'vegan-theme') {
      this.imageSource = 'assets/VeganHeureuxF3.jfif';
    } else {
      this.imageSource = "assets/CartoonHeureuxF1.jpg";
    }
  });

}



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
  }












