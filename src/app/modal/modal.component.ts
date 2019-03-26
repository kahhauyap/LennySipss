import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Drink } from '../drink';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnChanges {

  @Input() drink: Drink;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      let change = changes[prop];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${prop}: currentValue = ${curVal}, previousValue = ${prevVal}`
      console.log(changeLog);
    }
  }
  clicked(drink: Drink) {
    console.log(drink.name);
  }
}
