import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinawoodComponent } from './chinawood.component';

const routes: Routes = [{ path: '', component: ChinawoodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChinawoodRoutingModule { }
