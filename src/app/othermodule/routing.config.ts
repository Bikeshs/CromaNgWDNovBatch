import { Routes } from "@angular/router";
import { OtherComponent } from "./other.component";
import { OtherAComponent } from "./otherA.component";
import { NotFoundComponent } from "./notfound.component";
import { OtherDComponent } from "./otherD.component";
import { OtherCComponent } from "./otherC.Component";
import { OtherBComponent } from "./otherB.Component";
export const routes: Routes = [
    {
        path: '', component: OtherComponent, children: [
            { path: '', component: OtherAComponent },
            { path: 'b', component: OtherBComponent },
            { path: '**', component: NotFoundComponent }
        ]
    },
    {
        path: 'c', component: OtherCComponent
    },
    { path: 'd', component: OtherDComponent },
    { path: '**', component: NotFoundComponent },
];