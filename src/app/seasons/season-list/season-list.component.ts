import { Component, OnInit } from '@angular/core';
import { Season } from '../service&&interface/season';
import { SeasonsService } from '../service&&interface/seasons.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent implements OnInit {

  searchText :any;
season:Season[] | any;
public errormsg:any;


  constructor(public seasonsSrvis:SeasonsService) { }

  ngOnInit(): void {
  this.seasonsSrvis.getTvPeople().subscribe(data=>

   this.season=data,
   error => this.errormsg = error);


  }
}
