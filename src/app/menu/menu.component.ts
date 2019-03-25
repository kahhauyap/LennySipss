import { Component, OnInit } from '@angular/core';
import { Drinks } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  drinks = Drinks;

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    alert("yo!");
  }

}
