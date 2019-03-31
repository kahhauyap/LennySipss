import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../reviews.service';
import { Review } from '../../review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getDrinks()
      .subscribe(reviews => this.reviews = reviews);
  }
}
