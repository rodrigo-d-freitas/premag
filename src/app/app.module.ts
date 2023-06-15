import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter'

import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { ProductsComponent } from './pages/products/products.component';
import { TecnologyComponent } from './pages/tecnology/tecnology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { rootRouterConfig } from './app.routes';
import { ConstructionModule } from './pages/construction/construction.module';
import { CarouselModule } from 'angular-bootstrap-md';
import { CounterComponent } from './elements/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FactoryComponent,
    ProductsComponent,
    TecnologyComponent,
    ContactComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig),
    NgxAnimatedCounterModule],
    ConstructionModule,
    CarouselModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
