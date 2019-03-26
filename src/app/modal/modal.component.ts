import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input() drink: Drink;

  constructor() { }

  ngOnInit() {
  }

}
