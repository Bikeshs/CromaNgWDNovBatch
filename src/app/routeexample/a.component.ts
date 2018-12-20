import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'acomp',
    templateUrl: './a.component.html'
})
export class AComponent {
    title = 'Hello A Component';
    constructor(private route: Router) {

    }
    backToLogin() {
        this.route.navigate(['./login']);
    }
}