import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HollywoodRoutingModule } from './hollywood-routing.module';
import { HollywoodComponent } from './hollywood.component';


@NgModule({
  declarations: [HollywoodComponent],
  imports: [
    CommonModule,
    HollywoodRoutingModule
  ]
})
export class HollywoodModule { }
