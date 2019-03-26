import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BlogComponent } from './blog/blog.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'bar', component: BarComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
