import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { ProductsComponent } from './pages/products/products.component';
import { ConstructionComponent } from './pages/construction/construction.component';
import { TecnologyComponent } from './pages/tecnology/tecnology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { rootRouterConfig } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FactoryComponent,
    ProductsComponent,
    ConstructionComponent,
    TecnologyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
