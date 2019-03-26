import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drinks } from './menu';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor() { }

  getDrinks(): Observable<Drink[]> {
    return of(Drinks);
  }
}
