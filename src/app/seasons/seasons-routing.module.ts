import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonsComponent } from './seasons.component';

const routes: Routes = [
  { path: '', component: SeasonsComponent},
  { path: 'seasoncomp', component: SeasonsComponent},
  { path: 'seasonlist', component: SeasonListComponent},
  { path: 'seasonDetails/:id', component: SeasonDetailsComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonsRoutingModule { }
