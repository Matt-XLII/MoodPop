import { Component,OnInit } from '@angular/core';
import { UnmotivatedService } from '../services/unmotivated.service';

@Component({
  selector: 'app-unmotivated-page',
  templateUrl: './unmotivated-page.component.html',
  styleUrls: ['./unmotivated-page.component.scss']
})
export class UnmotivatedPageComponent  {
  chuckQuotes: string[]= [];
  currentIndex: number = 0;

constructor(private unmotivatedService: UnmotivatedService) {

}

ngOnInit(): void {
this.unmotivatedService.fetchChuck(this.chuckQuotes);
}

getCurrentQuote(): string {
return this.chuckQuotes[this.currentIndex];

}

nextQuote(): void {
this.currentIndex++;
if (this.currentIndex >= this.chuckQuotes.length) {
this.currentIndex = 0;
}
}
}