import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnmotivatedService {
  quote: string = '';

  constructor() { }

  fetchQuote(): void {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data: any) => console.log(this.quote = data.value));

  }

  fetchQuotes(): void {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data: any) => console.log(this.quote = data.value));
}
}
