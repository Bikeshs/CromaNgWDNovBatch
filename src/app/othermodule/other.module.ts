import { NgModule } from "@angular/core";
import { OtherComponent } from "./other.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [OtherComponent], //component
    imports: [BrowserModule], //module
    providers: [], //services
    bootstrap: [OtherComponent], //starting component
    exports: [], //if any module you want export
})
export class OtherModule { }