import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchseasonPipe } from './season-list/searchseason.pipe';
import { FormsModule } from '@angular/forms';
// import { SeasonDetailsComponent } from './season-details/season-details.component';
// import { SeasonListComponent } from './season-list/season-list.component';


@NgModule({
  declarations: [SeasonsComponent, SeasonDetailsComponent, SeasonListComponent, SearchseasonPipe],
  imports: [
    CommonModule,FormsModule,
    SeasonsRoutingModule,HttpClientModule,
    Ng2SearchPipeModule
  ],
  exports: [SeasonDetailsComponent, SeasonListComponent]
})
export class SeasonsModule { }
