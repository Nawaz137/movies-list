import { TamilModule } from './tamil.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TamilDetailComponent } from './tamil-detail/tamil-detail.component';

import { TamilComponent } from './tamil.component';
import { TamilListComponent } from './tamil-list/tamil-list.component';

const routes: Routes = [
  { path: '', component: TamilComponent },
  { path: 'tamilcomp', component: TamilComponent},
  { path: 'tamillist', component: TamilListComponent},
  { path: 'tamilDetails/:id', component: TamilDetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TamilRoutingModule { }
