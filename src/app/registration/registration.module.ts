import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from "@angular/forms";
import { AgeCountPipe } from '../pipe/agecountpipe';


@NgModule({
    declarations: [
        RegistrationComponent, AgeCountPipe
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
