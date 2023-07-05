import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenderthemesService {


  theme = 'female-theme';

  changeTheme(newTheme: string) {
    this.theme = newTheme;
  }
}
