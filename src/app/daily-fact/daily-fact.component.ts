import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-fact',
  templateUrl: './daily-fact.component.html',
  styleUrls: ['./daily-fact.component.scss']
})
export class DailyFactComponent implements OnInit {
  quote: string = "";

  ngOnInit() {
    this.fetchQuoteFact();
  }

  fetchQuoteFact() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then(response => response.json())
      .then(quote => {
        const limitedQuote = this.limitCharacterLength(quote.text, 100);
        this.quote = limitedQuote;
      });
  }

  limitCharacterLength(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
}




