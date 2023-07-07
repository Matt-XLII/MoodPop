import { Injectable } from '@angular/core';
import { FakeAPI } from '../fake-api/fake-api';

@Injectable({
  providedIn: 'root'
})
export class AngryService {
  insultList = new FakeAPI().insultList;
  insult: string = "";

  constructor() { }

  randomInsult() {
    let random = Math.floor(Math.random() * this.insultList.length);
    return this.insultList[random];
  }

}
