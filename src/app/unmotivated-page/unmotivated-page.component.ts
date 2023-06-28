import { Component,OnInit } from '@angular/core';
import { UnmotivatedService } from '../services/unmotivated.service';

@Component({
  selector: 'app-unmotivated-page',
  templateUrl: './unmotivated-page.component.html',
  styleUrls: ['./unmotivated-page.component.scss']
})
export class UnmotivatedPageComponent  {
  chuckQuotes: string[]= [];

constructor(private unmotivatedService: UnmotivatedService) {



}

ngOnInit(): void {
this.unmotivatedService.fetchChuck(this.chuckQuotes);
}

}
