import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: ReviewsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
