import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'acomp',
    templateUrl: './a.component.html'
})
export class AComponent {
    title = 'Hello A Component';
    constructor(private route: Router, private routeObj: ActivatedRoute) {
        this.routeObj.params.subscribe(xyz => {
            this.title = xyz.uname;
        })
    }
    backToLogin() {
        this.route.navigate(['./login']);
    }
}