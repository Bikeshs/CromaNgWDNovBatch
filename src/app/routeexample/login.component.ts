import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    title = 'Hello login Component';
    name = "";
    constructor(private route: Router) {

    }
    redirectToA() {
        if (this.name != '') {
            this.route.navigate(['./a', this.name]); //redirect to A with  urlEncoded data
        }
    }

    redirectToC() {
        if (this.name != '') {
            localStorage.setItem('name', this.name);
            sessionStorage.setItem('EmailId', this.name);
            this.route.navigate(['./c'], { queryParams: { email: this.name } }); //redirect to C with  QueryString data
        }
    }
}