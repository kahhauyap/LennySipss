import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewCardComponent } from './review-card/review-card.component';

@NgModule({
  declarations: [ReviewsComponent, ReviewCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewsModule { }
