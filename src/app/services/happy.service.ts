import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HappyService {
  joke : string = "";
  constructor() { }


  fetchData():void{
    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
      method:'GET',
      headers: {
    'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
    'Content-type': 'application/json',}})
    .then(function (response) { return response.json()})
    .then((data:any) => this.joke = data[0].joke)
   }
}
