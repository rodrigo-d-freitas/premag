import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { ProductsComponent } from './pages/products/products.component';
import { TecnologyComponent } from './pages/tecnology/tecnology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { rootRouterConfig } from './app.routes';
import { ConstructionModule } from './pages/construction/construction.module';
import { CarouselModule } from 'angular-bootstrap-md';
import { CounterComponent } from './elements/counter/counter.component';
import { ProdutoComponent } from './elements/produto/produto.component';
import { ButtonModule } from './elements/button/button.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterModule } from './elements/footer/footer.module';
import { headerModule } from './elements/header/header.module';
import { ArrayFixPipe } from './pipes/array-fix.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FactoryComponent,
    ProductsComponent,
    TecnologyComponent,
    ContactComponent,
    CounterComponent,
    ProdutoComponent,
    ArrayFixPipe
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig),
    NgxAnimatedCounterModule],
    CarouselModule,
    ButtonModule,
    SlickCarouselModule,
    FooterModule,
    headerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ArrayFixPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
