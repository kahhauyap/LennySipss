import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { ReviewCardComponent } from './reviews/review-card/review-card.component';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReviewsRoutingModule,
  ],
  declarations: [
    ReviewsComponent,
    ReviewCardComponent,
  ]
})
export class ReviewsModule { }
