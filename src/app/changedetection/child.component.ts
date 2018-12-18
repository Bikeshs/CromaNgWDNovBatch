import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    title: 'Hello Child Component';
}