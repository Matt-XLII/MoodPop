import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HappyService {
  joke : string = "";

  constructor() { }


  fetchData(list:string[]):void{
    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
      method:'GET',
      headers: {
    'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
    'Content-type': 'application/json',}})
    .then(function (response) { return response.json()})
    .then((data:any) => data.forEach((el: { joke: string; }) => list.push(el.joke)))
   }

    fetchJokes(list:string[]):void{
      fetch("https://api.api-ninjas.com/v1/jokes?limit=20", {
        method:'GET',
        headers: {
      'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
      'Content-type': 'application/json',}})
      .then(function (response) { return response.json()})
      .then((data:any) => data.forEach((el: { joke: string; }) => list.push(el.joke)))
     }


    }


