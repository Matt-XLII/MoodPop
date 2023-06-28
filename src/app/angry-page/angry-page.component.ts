import { Component, OnInit } from '@angular/core';
import { AngryService } from '../services/angry.service';

@Component({
  selector: 'app-angry-page',
  templateUrl: './angry-page.component.html',
  styleUrls: ['./angry-page.component.scss']
})
export class AngryPageComponent implements OnInit {

  constructor(private angryService: AngryService) { }
  
insults: string[] = [];

  ngOnInit(): void {
      this.insults = this.angryService.insultList;
  }
}
