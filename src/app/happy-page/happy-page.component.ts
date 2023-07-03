

import { Component, OnInit } from '@angular/core';
import { HappyService } from '../services/happy.service';

@Component({
  selector: 'app-happy-page',
  templateUrl: './happy-page.component.html',
  styleUrls: ['./happy-page.component.scss']
})
export class HappyPageComponent implements OnInit {
  jokes: string[] = [];
  currentIndex: number = 0;

  constructor(private happyService: HappyService) {}

  ngOnInit(): void {
    this.happyService.fetchJokes(this.jokes);
  }

  getCurrentJoke(): string {
    return this.jokes[this.currentIndex];
  }

  nextJoke(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.jokes.length) {
      this.currentIndex = 0;
    }
  }
}
