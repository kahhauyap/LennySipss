import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';
import { CardComponent } from '../card/card.component'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  drinks: Drink[];
  selectedDrink: Drink;
  isOpen: boolean;

  constructor(private drinkService: DrinkService) {
    this.selectedDrink = { id: 0, name: '', imageUrl: '', videoUrl: '', description: '' };
    this.isOpen = false;
  }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    this.drinkService.getDrinks()
      .subscribe(drinks => this.drinks = drinks);
  }

  onClick(drink: Drink): void {
    if (!this.isOpen) this.selectedDrink = drink;
    this.isOpen = !this.isOpen;
    //  console.log("selectedDrink: " + this.selectedDrink.name);
  }
}
