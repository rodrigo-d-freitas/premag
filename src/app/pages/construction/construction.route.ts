import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ConstructionComponent } from "./construction.component";

const constructorRouterConfig: Routes = [
    { path: '', component: ConstructionComponent,
        children: [
            { path: '', component: ConstructionComponent }
        ]
    }
]

@NgModule({
    imports: [],
    exports: []
})

export class ConstructionRoutingModule {}