import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

const routes: Routes = [
  {path:"",component:TopheadingComponent},
  {path:"tech",component:TechNewsComponent},
  {path:"sports",component:SportsComponent},
  {path:"health",component:HealthComponent},
  {path:"entertainment",component:EntertainmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
