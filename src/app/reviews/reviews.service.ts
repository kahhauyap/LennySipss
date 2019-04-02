import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reviews } from './reviews';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getDrinks(): Observable<Review[]> {
    return of(Reviews);
  }
}
