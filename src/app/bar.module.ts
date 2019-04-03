import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './bar/bar.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { BarRoutingModule } from './bar-routing.module';


@NgModule({
  declarations: [
    BarComponent,
    MenuComponent,
    ModalComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BarRoutingModule
  ]
})
export class BarModule { }
