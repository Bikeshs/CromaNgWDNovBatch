import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StartComponent } from "./start.component";
import { AComponent } from "./a.component";
import { CComponent } from "./c.component";
import { LoginComponent } from "./login.component";
import { BComponent } from "./b.component";
import { RouterModule } from "@angular/router";
import { routes } from "./route.config";
@NgModule({
    declarations: [StartComponent, AComponent, BComponent, CComponent, LoginComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [StartComponent]
})
export class RouterAppModule {

}