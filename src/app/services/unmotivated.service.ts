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

  fetchChuck(list: string[]): void {
    for (let i = 0; i < 20; i++) {
      fetch("https://api.api-ninjas.com/v1/chucknorris?", {
        method: 'GET',
        headers: {
          'X-Api-key': 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
          'Content-type': 'application/json',
        }
      })
        .then(function (response) { return response.json() })
        .then((data: any) => data.joke.length < 150? list.push(data.joke) : this.fetchChuck(list))
;    }
  }
}
