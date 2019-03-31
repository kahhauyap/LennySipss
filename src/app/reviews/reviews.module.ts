import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewCardComponent } from './review-card/review-card.component';

@NgModule({
  declarations: [ReviewsComponent, ReviewCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewsModule { }
