import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BollywoodComponent } from './bollywood.component';

const routes: Routes = [{ path: '', component: BollywoodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BollywoodRoutingModule { }
