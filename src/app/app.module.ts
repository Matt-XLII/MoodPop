import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyFactComponent } from './daily-fact/daily-fact.component';
import { HeaderComponent } from './header/header.component';
import { DailyMoodComponent } from './daily-mood/daily-mood.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyFactComponent,
    HeaderComponent,
    DailyMoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
