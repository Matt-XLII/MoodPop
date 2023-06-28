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
    .then((data: any) => this.quote = data.value);

  }

  fetchQuotes(list:string[]): void {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data: any) => this.quote = data.value);
}
}
