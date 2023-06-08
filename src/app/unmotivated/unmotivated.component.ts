import { Component } from '@angular/core';


@Component({
  selector: 'app-unmotivated',
  templateUrl: './unmotivated.component.html',
  styleUrls: ['./unmotivated.component.scss']
})
export class UnmotivatedComponent {

  quote:string = '';
  autor:string = '';

  fetchQuote():void {
    fetch(`https://api.goprogram.ai/inspiration/?${Math.random() * 200}`)
      .then(response => response.json())
      .then(data => this.quote = data.quote + " - " + data.author)


  }}



// function animateImage() {
//         const test = document.getElementById("myImage");
//         test.classList.toggle("mirror-effect");
//         test.style.transform = "scale(1.2)";
//       }
