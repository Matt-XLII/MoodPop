import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderthemesService {
  private _theme = new BehaviorSubject<string>('default-theme');

  theme$ = this._theme.asObservable();
  

  changeTheme(theme: string) {
    this._theme.next(theme);
  }
}
