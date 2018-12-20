import { NgModule } from "@angular/core";
import { StartComponent } from "./start.component";
import { BrowserModule } from "@angular/platform-browser";
import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations: [StartComponent, ParentComponent, ChildComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [ParentComponent]
})
export class ChangeDetectionModule {

}
