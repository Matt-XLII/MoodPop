import { Component, OnInit } from '@angular/core';
import { AngryService } from '../services/angry.service';

@Component({
  selector: 'app-angry-page',
  templateUrl: './angry-page.component.html',
  styleUrls: ['./angry-page.component.scss']
})
export class AngryPageComponent implements OnInit {
  insults: string[] = [];
  currentIndex: number = 0;


  constructor(private angryService: AngryService) { }
  
  getCurrentInsult(): string {
    return this.insults[this.currentIndex];
  }

  ngOnInit(): void {
      this.insults = this.angryService.insultList;
  }

  nextInsult(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.insults.length) {
      this.currentIndex = 0;
    }
  }
}
