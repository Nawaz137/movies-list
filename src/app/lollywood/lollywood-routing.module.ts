import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LollywoodComponent } from './lollywood.component';

const routes: Routes = [{ path: '', component: LollywoodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LollywoodRoutingModule { }
