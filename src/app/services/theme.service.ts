import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
isDark: boolean = true;
darkTheme = "#2a2929"
darkThemeBackground = "#666464"
darkThemeBackground2 = "#333232"
darkThemeFontColor = "#ffffff"
lightTheme = "#ffffff"
lightThemeBackground = "#ffffff"
lightThemeFontColor = "#000000"

  constructor() { }

  toggleTheme() {
    this.isDark = !this.isDark;
}
}