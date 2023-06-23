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
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilComponent } from './profil/profil.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { BoredComponent } from './bored/bored.component';
import { SignInComponent } from './sign-in/sign-in.component';







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
<<<<<<< HEAD
   

=======
    SignInComponent,
>>>>>>> 2aa52f4e9a9a900fc0f6db7316a499ed64fa4eac
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
