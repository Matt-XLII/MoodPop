import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { AppComponent } from './app.component';
import { DailyFactComponent } from './daily-fact/daily-fact.component';
import { HeaderComponent } from './header/header.component';
import { DailyMoodComponent } from './daily-mood/daily-mood.component';
import { UnmotivatedComponent } from './unmotivated/unmotivated.component';
import { AngryComponent } from './angry/angry.component';
import { HappyComponent } from './happy/happy.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilComponent } from './profil/profil.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { BoredComponent } from './bored/bored.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HappyPageComponent } from './happy-page/happy-page.component';
import { StatsMensuellesComponent } from './stats-mensuelles/stats-mensuelles.component';
import { AngryPageComponent } from './angry-page/angry-page.component';
import { BoredPageComponent } from './bored-page/bored-page.component';
import { UnmotivatedPageComponent } from './unmotivated-page/unmotivated-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';








@NgModule({
  declarations: [
    AppComponent,
    DailyFactComponent,
    HeaderComponent,
    DailyMoodComponent,
    UnmotivatedComponent,
    AngryComponent,
    HappyComponent,
    FooterComponent,
    ProfilComponent,
    MenuBurgerComponent,
    BoredComponent,
    SignInComponent,
    LogInComponent,
    HappyPageComponent,
    StatsMensuellesComponent,
    AngryPageComponent,
    BoredPageComponent,
    UnmotivatedPageComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
