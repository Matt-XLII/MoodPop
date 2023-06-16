import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.scss']
})
export class BoredComponent implements OnInit {

  title : string = "";
  question : string = "";
  answer : string = "";

  ngOnInit(): void {
    this.fetchData();
  }

  clicked = false;
  timed = false;
  checked = false;
  checkedTimed = false;
  showSolution: boolean = false; // Ajout de la variable showSolution

  // ...

  solution() {
    this.showSolution = true; // Afficher la solution lorsque le bouton est cliqué
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
    fetch("https://api.api-ninjas.com/v1/riddles/", {
      method:'GET',
      headers: {
    'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
    'Content-type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
      this.title = data[0].title;
      this.question = data[0].question;
      this.answer = data[0].answer;
    });

   }


  }
