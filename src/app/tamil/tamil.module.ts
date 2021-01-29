import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TamilRoutingModule } from './tamil-routing.module';
import { TamilComponent } from './tamil.component';
import { TamilDetailComponent } from './tamil-detail/tamil-detail.component';
import { TamilListComponent } from './tamil-list/tamil-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [TamilComponent, TamilDetailComponent, TamilListComponent],
  imports: [
    CommonModule,
    TamilRoutingModule,
    Ng2SearchPipeModule
  ],
  exports: [TamilListComponent, TamilDetailComponent]
})
export class TamilModule { }
