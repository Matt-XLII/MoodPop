import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';


@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.scss']
})
export class BoredComponent implements OnInit {

  title : string = "";
  question : string = "";
  answer : string = "";
  theme!: string;
  imageSource!: string;


  clicked = false;
  timed = false;
  checked = false;
  checkedTimed = false;
  showSolution: boolean = false; // Ajout de la variable showSolution
  revealed = false;
  expanded = false;
  texteVisible = true;

  constructor(private themeService: ThemeService) { } // Injecte le service

  ngOnInit(): void {
   this.fetchData();
    this.theme = this.themeService.theme;
      if (this.theme === 'male-theme') {
        this.imageSource = "assets/EmbarasséNeutreH3.jfif";
      } else if (this.theme === 'female-theme') {
        this.imageSource = "assets/EmbarasséF1.jpg";
      } else if (this.theme === 'vegan-theme') {
        this.imageSource = 'assets/VeganBoredF2.jfif';
      } else {
        this.imageSource = "assets/EmbarasséF1.jpg";
      }
    };

  

  solution() {
    this.showSolution = true; // Afficher la solution lorsque le bouton est cliqué
    this.revealed = true;
    this.expanded = true;  // Définition de "expanded" à "true" quand le bouton "Answer" est cliqué
    this.texteVisible = false;
  }

  isAnswered() {

    if (this.timed===true && this.clicked===true) {
      this.timed =!this.timed;
      this.clicked =!this.clicked;
      this.checked = true;
      setTimeout(() => {
        this.checkedTimed =!this.checkedTimed;
      },750)
    } else {}

  }





  isClicked() {
    if (!this.revealed && !this.checked) {
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

  fetchData():void{
    fetch("https://api.api-ninjas.com/v1/riddles/", {
      method:'GET',
      headers: {
    'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
    'Content-type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
      const validData = data.find((item: { question: string | any[]; }) => item.question.length <= 120);
      if (validData) {
        this.title = data[0].title;
        this.question = validData.question;

        this.answer = data[0].answer;
      } else {
        this.fetchData();
      }
    });
   }

   limitCharacterLength(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }


}
