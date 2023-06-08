/*import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-fact',
  templateUrl: './daily-fact.component.html',
  styleUrls: ['./daily-fact.component.scss']
})
export class DailyFactComponent {

  quote: string = "";

  fetchQuoteFact() {    
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then(response => response.json())
      .then(quote => {
        this.quote = quote.text;
      });
  }


}*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-fact',
  templateUrl: './daily-fact.component.html',
  styleUrls: ['./daily-fact.component.scss']
})
export class DailyFactComponent implements OnInit {
  quote: string = "";

  ngOnInit() {
    this.scheduleMidnightUpdate();
    this.fetchQuoteFact();
  }

  fetchQuoteFact() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then(response => response.json())
      .then(quote => {
        this.quote = quote.text;
      });
  }

  scheduleMidnightUpdate() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    setTimeout(() => {
      this.fetchQuoteFact();
      this.scheduleMidnightUpdate();
    }, timeUntilMidnight);
  }
}


