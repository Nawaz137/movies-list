import { SeasonsService } from './service&&interface/seasons.service';
import { Component, OnInit } from '@angular/core';
import { Season } from './service&&interface/season';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],

})
export class SeasonsComponent implements OnInit {
// season:Season[] | any;
// public errormsg:any;


//   constructor(public seasonsSrvis:SeasonsService) { }

//   ngOnInit(): void {
//   this.seasonsSrvis.seasondata().subscribe(data=>

//    this.season=data,
//    error => this.errormsg = error);


//   }

constructor(){}
ngOnInit(){}
}
