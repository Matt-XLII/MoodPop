import { Component,OnInit } from '@angular/core';
import { HappyService } from '../services/happy.service';

@Component({
  selector: 'app-happy-page',
  templateUrl: './happy-page.component.html',
  styleUrls: ['./happy-page.component.scss']
})
export class HappyPageComponent implements OnInit {
  jokes: string[] = [];
  chuck: string[] = [];

constructor(private happyService: HappyService) {

}

ngOnInit(): void {
this.happyService.fetchJokes(this.jokes);
this.fetchChuck(this.chuck);
}

fetchChuck(list:string[]):void{
  for (let i = 0; i < 20; i++){
  fetch("https://api.api-ninjas.com/v1/chucknorris?", {
    method:'GET',
    headers: {
  'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
  'Content-type': 'application/json',}})
  .then(function (response) { return response.json()})
  .then((data:any) => list.push(data.joke))
}
}}
