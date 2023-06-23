import { Component, OnInit } from '@angular/core';
import { GenderthemesService } from '../genderthemes.service';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.scss']
})
export class HappyComponent implements OnInit{

joke : string = "";
clicked = false;
timed = false;
checked = false;
checkedTimed = false;
theme!: string;
imageSource!: string;

constructor(private genderthemesService: GenderthemesService) { } // Injecte le service

ngOnInit(): void {
  this.fetchData();

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

fetchData():void{
  fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
    method:'GET',
    headers: {
  'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
  'Content-type': 'application/json',}})
  .then(function (response) { return response.json()})
  .then((data:any) => this.joke = data[0].joke)
 }
}















