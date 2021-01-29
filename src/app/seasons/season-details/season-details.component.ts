import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Season } from '../service&&interface/season';
import { SeasonsService } from '../service&&interface/seasons.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent implements OnInit {

  showId: any;
  peop: Season | any;
  networkError: any;

  constructor(private activatedRoute: ActivatedRoute,
    private seasondetail: SeasonsService,
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
      this.seasondetail.showpeopleDetail(this.showId).subscribe(
        (data: any) => {
          this.peop = data;
          console.log('people data',data)
        },
      );
    }

}
