import { Component, OnInit } from '@angular/core';
import { Drinks } from '../menu'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  drinks = Drinks;

  constructor() { }

  ngOnInit() {
  }

}
