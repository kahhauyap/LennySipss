import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  drinks: Drink[];
  selectedDrink: Drink;
  isOpen: boolean;
  searchText: string;
  filteredDrinks: Drink[];

  constructor(private drinkService: DrinkService) {
    this.selectedDrink = { id: 0, name: '', imageUrl: '', videoUrl: '', description: '' };
    this.isOpen = false;
  }

  ngOnInit() {
    this.getDrinks();
    this.filteredDrinks = this.drinks;
  }

  getDrinks(): void {
    this.drinkService.getDrinks()
      .subscribe(drinks => this.drinks = drinks);
  }

  onClick(drink: Drink): void {
    if (!this.isOpen) this.selectedDrink = drink;
    this.isOpen = !this.isOpen;
  }

  search(): void {
    if (!this.searchText)
      this.filteredDrinks = this.drinks;
    else
      this.filteredDrinks = this.drinks
        .filter(drink => this.caseIncludes(drink.name, this.searchText));
  }

  caseIncludes(a: string, b: string) {
    if (a['toUpperCase']().includes(b['toUpperCase']()))
      return true;
    else
      return false;
  }
}
