import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConstructionComponent } from './construction.component';
import { ConstructionRoutingModule } from './construction.route';
import { CarouselModule } from 'src/app/elements/carousel/carousel.module';
import { CardObrasComponent } from 'src/app/elements/card-obras/card-obras.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from 'src/app/elements/counter/counter.component';
import { HeaderModule } from 'src/app/elements/header/header.module';
import { FooterModule } from 'src/app/elements/footer/footer.module';

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
    HttpClientModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    ConstructionComponent,
    CardObrasComponent
  ]
})
export class ConstructionModule { }
