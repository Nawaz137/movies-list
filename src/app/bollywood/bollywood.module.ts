import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BollywoodRoutingModule } from './bollywood-routing.module';
import { BollywoodComponent } from './bollywood.component';


@NgModule({
  declarations: [BollywoodComponent],
  imports: [
    CommonModule,
    BollywoodRoutingModule
  ]
})
export class BollywoodModule { }
