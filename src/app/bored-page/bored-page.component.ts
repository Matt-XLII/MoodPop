import { Component, OnInit } from '@angular/core';
import { BoredService } from '../services/bored.service';

@Component({
  selector: 'app-bored-page',
  templateUrl: './bored-page.component.html',
  styleUrls: ['./bored-page.component.scss']
})
export class BoredPageComponent implements OnInit{
constructor(private BoredService : BoredService) { }

riddles : string[] = [];
answer : boolean = false;
riddleIndex : number = 0;

ngOnInit(): void {
    this.BoredService.fetchRiddles(this.riddles);
}

showSolution(){
  this.answer = true;
}

nextRiddle(){
  this.riddleIndex = Math.floor(Math.random() * this.riddles.length);
  this.answer = false;
}
}
