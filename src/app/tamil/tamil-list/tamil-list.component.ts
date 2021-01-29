import { Component, OnInit } from '@angular/core';
import { Peopless } from '../tamil';
import { TamilsrvService } from '../tamilsrv.service';

@Component({
  selector: 'app-tamil-list',
  templateUrl: './tamil-list.component.html',
  styleUrls: ['./tamil-list.component.scss']
})
export class TamilListComponent implements OnInit {

  peo: Peopless[] | any;
  searchText: any;


  constructor(private peopeservice: TamilsrvService) { }



  ngOnInit(): void {
    this.peopeservice.getTvPeople().subscribe(
      data => {
        // this.peo= data;
        // debugger
        this.peo= data;

    },
    );
  }

}


