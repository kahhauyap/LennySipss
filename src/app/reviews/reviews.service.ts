import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reviews } from './reviews';
import { Review } from './review';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewsUrl = 'http://localhost:4200/api/Reviews';  // URL to web api

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    //  return of(Reviews);
    return this.http.get<Review[]>(this.reviewsUrl)
      .pipe(
        catchError(this.handleError<Review[]>('getReviews', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
