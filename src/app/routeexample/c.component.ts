import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'ccomp',
    templateUrl: './c.component.html'
})
export class CComponent {
    title = 'Hello C Component';
    constructor(private routeObj: ActivatedRoute) {
        this.routeObj.queryParams.subscribe(xyz => {
            this.title = xyz.email;
        })
    }
}