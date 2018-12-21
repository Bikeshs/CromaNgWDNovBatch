import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'bcomp',
    templateUrl: './b.component.html'
})
export class BComponent {
    title = "Hello B Component";
    name;
    emailId;
    constructor() {
        this.name = localStorage.getItem('name');
        this.emailId = sessionStorage.getItem('EmailId');
    }
}