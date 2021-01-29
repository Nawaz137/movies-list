import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LollywoodRoutingModule } from './lollywood-routing.module';
import { LollywoodComponent } from './lollywood.component';


@NgModule({
  declarations: [LollywoodComponent],
  imports: [
    CommonModule,
    LollywoodRoutingModule
  ]
})
export class LollywoodModule { }
