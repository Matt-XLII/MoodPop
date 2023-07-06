import { Component, OnInit} from '@angular/core';
import { FakeAPI } from '../fake-api/fake-api';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-angry',
  templateUrl: './angry.component.html',
  styleUrls: ['./angry.component.scss']
})
export class AngryComponent implements OnInit {

  clicked: boolean = false;
  timed: boolean = false;
  checked: boolean = false;
  checkedTimed: boolean = false;
  insultList = new FakeAPI().insultList;

quote: string = "";
insult: string = "";
theme!: string;
imageSource!: string;


constructor(private themeService: ThemeService) { } // Injecte le service


ngOnInit(): void {


    this.theme = this.themeService.theme;
    if (this.theme === 'male-theme') {
      this.imageSource = "assets/CartoonVenere1.jpg";
    } else if (this.theme === 'female-theme') {
      this.imageSource = "assets/CartoonVenereF2.jpg";
    } else if (this.theme === 'vegan-theme') {
      this.imageSource = 'assets/VeganEnerveF3.jfif';
    } else {
      this.imageSource = "assets/CartoonVenereF2.jpg";
    }
  };



isClicked() {
  this.ageConfirmation(); //rajout pour vérification de l'age//

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

  redirectToPage() {
    window.open('https://www.instagram.com/accounts/login/', '_blank');
  }

  ageConfirmation() {
    const confirmed = window.confirm('Avez-vous plus de 18 ans ?');
    if (confirmed) {
      this.checked = false;
    } else {
      this.checked = true;
      this.insult = "Vous devez avoir plus de 18 ans pour accéder à ce contenu.";
    }
  }

  }




