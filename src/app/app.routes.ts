import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { FactoryComponent } from "./pages/factory/factory.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ConstructionComponent } from "./pages/construction/construction.component";
import { TecnologyComponent } from "./pages/tecnology/tecnology.component";
import { ContactComponent } from "./pages/contact/contact.component";

export const rootRouterConfig: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'fabrica', component: FactoryComponent},
    {path: 'produtos-e-servicos', component: ProductsComponent},
    {path: 'principais-obras', component: ConstructionComponent},
    {path: 'tecnologia', component: TecnologyComponent},
    {path: 'contato', component: ContactComponent}
    
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}