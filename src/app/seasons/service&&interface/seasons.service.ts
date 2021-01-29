import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  // urls= 'http://api.tvmaze.com/show';
    // url='http://api.tvmaze.com/'
    // urlseason= 'http://api.tvmaze.com/shows/1/seasons';
    // url='http://api.tvmaze.com/shows'

  // constructor(private http: HttpClient) { }

  // getTvPeople(): Observable<any>{
  //   return this.http.get(this.urls);
  // }

   // api calls for fetching the People details of a seleted show
  // showpeopleDetail(showId: number) {
  //   const url = this.url + `seasoncomp/${showId}`;
  //   return this.http.get(url)

  // }

  // constructor(public http:HttpClient) { }
//  seasondata(): Observable<any>{
//     return this.http.get(this.url)
//     .pipe(catchError(this.handleError) );

//   }

//   handleError(error: { message: any; }){
//     return throwError (error.message || 'Server error');
//   }




  urlp='http://api.tvmaze.com/shows';
  url='http://api.tvmaze.com/'

  constructor(private http: HttpClient) { }

  getTvPeople(): Observable<any>{
    return this.http.get(this.urlp);
  }

   // api calls for fetching the People details of a seleted show
  showpeopleDetail(showId: number) {
    const url = this.url + `seasons/${showId}`;
    return this.http.get(url)
  }
}

