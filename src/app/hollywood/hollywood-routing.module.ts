import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HollywoodComponent } from './hollywood.component';

const routes: Routes = [{ path: '', component: HollywoodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HollywoodRoutingModule { }
