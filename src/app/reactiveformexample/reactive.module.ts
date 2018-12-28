import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormComponent } from "./reactive.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ReactiveFormComponent], //component
    imports: [BrowserModule, ReactiveFormsModule], //module
    providers: [], //services
    bootstrap: [ReactiveFormComponent], //starting component
    exports: [], //if any module you want export
})
export class ReactiveModule { }