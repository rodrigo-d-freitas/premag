import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConstructionComponent } from './construction.component';
import { ConstructionRoutingModule } from './construction.route';
import { CarouselModule } from 'src/app/elements/carousel/carousel.module';
import { CardObrasComponent } from 'src/app/elements/card-obras/card-obras.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from 'src/app/elements/counter/counter.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from 'src/app/elements/header/header.component';
import { FooterComponent } from 'src/app/elements/footer/footer.component';
import { FooterModule } from 'src/app/elements/footer/footer.module';
import { headerModule } from 'src/app/elements/header/header.module';
import { ArrayFixPipe } from 'src/app/pipes/array-fix.pipe';

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
    SlickCarouselModule,
    FooterModule,
    headerModule
  ],
  exports: [
    ConstructionComponent,
    CardObrasComponent
  ]
})
export class ConstructionModule { }
