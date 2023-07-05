import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
isDark: boolean = true;
darkTheme = "#2a2929"
darkThemeBackground = "#544D56"
darkThemeBackground2 = "#544D56"
darkThemeFontColor = "#ffffff"
darkThemeTextShadow = "3px 3px 6px #000"

lightTheme = "#f5f5f5"
lightThemeFontColor = "#2f2f2f"
lightThemeBackground = "#f5f5f5"
lightThemeTextShadow = "none"

  constructor() { }

  toggleTheme() {
    this.isDark = !this.isDark;
}

theme = 'female-theme';

changeTheme(newTheme: string) {
  this.theme = newTheme;
}
}
