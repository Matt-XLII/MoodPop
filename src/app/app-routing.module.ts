import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyFactComponent } from './daily-fact/daily-fact.component';
import { DailyMoodComponent } from './daily-mood/daily-mood.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [

    { path: 'dailyfact', component: DailyFactComponent },
    { path: '', component: DailyMoodComponent},
    { path: 'login', component: LogInComponent}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}
