import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyFactComponent } from './daily-fact/daily-fact.component';
import { HeaderComponent } from './header/header.component';
import { DailyMoodComponent } from './daily-mood/daily-mood.component';
import { UnmotivatedComponent } from './unmotivated/unmotivated.component';
import { AngryComponent } from './angry/angry.component';
import { HappyComponent } from './happy/happy.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyFactComponent,
    HeaderComponent,
    DailyMoodComponent,
    UnmotivatedComponent,
    AngryComponent,
    HappyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
