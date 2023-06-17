import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConstructionComponent } from './construction.component';
import { ConstructionRoutingModule } from './construction.route';
import { CarouselModule } from 'src/app/elements/carousel/carousel.module';
import { CardObrasComponent } from 'src/app/elements/card-obras/card-obras.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from 'src/app/elements/counter/counter.component';

@NgModule({
  declarations: [
    ConstructionComponent,
    CardObrasComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ConstructionRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ConstructionComponent,
    CardObrasComponent
  ]
})
export class ConstructionModule { }
