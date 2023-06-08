import { Component } from '@angular/core';

@Component({
  selector: 'app-angry',
  templateUrl: './angry.component.html',
  styleUrls: ['./angry.component.scss']
})
export class AngryComponent {

quote: string = "";

fetchQuote(): void {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => this.quote = data.quote)

}
}
