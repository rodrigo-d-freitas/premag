import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
