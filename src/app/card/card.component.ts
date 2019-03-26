import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() drink: Drink;
  @Input() selectedDrink: Drink;

  constructor() {
  }

  ngOnInit() {
  }

}
