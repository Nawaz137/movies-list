import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChinawoodRoutingModule } from './chinawood-routing.module';
import { ChinawoodComponent } from './chinawood.component';


@NgModule({
  declarations: [ChinawoodComponent],
  imports: [
    CommonModule,
    ChinawoodRoutingModule
  ]
})
export class ChinawoodModule { }
