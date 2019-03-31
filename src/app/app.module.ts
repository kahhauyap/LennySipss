import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { BarComponent } from './bar/bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReviewsModule } from './reviews/reviews.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CarouselComponent,
    AboutComponent,
    BarComponent,
    HomepageComponent,
    MenuComponent,
    ModalComponent,
    CardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReviewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
