import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoredService {
  title : string = "";
  question : string = "";
  answer : string = "";

  constructor() { }

  fetchData():void{
    fetch("https://api.api-ninjas.com/v1/riddles/", {
      method:'GET',
      headers: {
    'X-Api-key' : 'q80JOdvIGyOhfvSXFKWV4A==0y5PJl9FCDrqP2ik',
    'Content-type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
      const validData = data.find((item: { question: string | any[]; }) => item.question.length <= 120);
      if (validData) {
        this.title = data[0].title;
        this.question = validData.question;
        console.log(this.question);

        this.answer = data[0].answer;
      } else {
        this.fetchData();
      }
    });

   }
}
