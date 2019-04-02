import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input() review: Review;
  @Input() background: string;

  constructor() { }

  ngOnInit() {
  }

}
