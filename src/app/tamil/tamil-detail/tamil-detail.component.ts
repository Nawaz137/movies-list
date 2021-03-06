import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peopless } from '../tamil';
import { TamilsrvService } from '../tamilsrv.service';


@Component({
  selector: 'app-tamil-detail',
  templateUrl: './tamil-detail.component.html',
  styleUrls: ['./tamil-detail.component.scss']
})
export class TamilDetailComponent implements OnInit {

  showId: any;
  peop: Peopless | any;
  networkError: any;

  constructor(private activatedRoute: ActivatedRoute,
    private tvpeopledetail: TamilsrvService,
    private router: Router) { }

  ngOnInit(): void {
    this.networkError = false;
    this.activatedRoute.params.subscribe(
      (params) => this.showId = +params.id
    );

    // check if the url contains a number else route to page not found
    if (isNaN(this.showId)) {
      this.router.navigate(['/page-not-found']);
    } else {
        this.fetchDetailss();
    }

  }
   //code for fetching the details from api
   fetchDetailss(): void {
    this.tvpeopledetail.showpeopleDetail(this.showId).subscribe(
      (data: any) => {
        this.peop = data;
        console.log('people data',data)
      },
    );
  }


}
