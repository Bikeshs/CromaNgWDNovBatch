import { NgModule } from "@angular/core";
import { OtherComponent } from "./other.component";
import { OtherAComponent } from "./otherA.component";
import { RouterModule } from "@angular/router";
import { routes } from "./routing.config";
import { CommonModule } from "@angular/common";
import { OtherBComponent } from "./otherB.Component";
import { OtherCComponent } from "./otherC.Component";
import { OtherDComponent } from "./otherD.component";
import { NotFoundComponent } from "./notfound.component";

@NgModule({
    declarations: [NotFoundComponent, OtherComponent, OtherAComponent, OtherBComponent, OtherCComponent, OtherDComponent], //component
    imports: [CommonModule, RouterModule.forChild(routes)], //module
    providers: [], //services
    bootstrap: [], //starting component
    exports: [], //if any module you want export
})
export class OtherModule { }