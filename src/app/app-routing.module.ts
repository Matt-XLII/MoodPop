import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyMoodComponent } from './daily-mood/daily-mood.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BoredPageComponent } from './bored-page/bored-page.component';
import { AngryPageComponent } from './angry-page/angry-page.component';
import { HappyPageComponent } from './happy-page/happy-page.component';
import { UnmotivatedPageComponent } from './unmotivated-page/unmotivated-page.component';


const routes: Routes = [

    { path: 'bored', component: BoredPageComponent },
    { path: 'angry', component: AngryPageComponent },
    { path: 'happy', component: HappyPageComponent },
    { path: 'unmotivated', component: UnmotivatedPageComponent },
    { path: 'dailymood', component: DailyMoodComponent },
    { path: 'login', component: LogInComponent },
    { path: 'signin', component: SignInComponent },
    { path: '', component: DailyMoodComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
