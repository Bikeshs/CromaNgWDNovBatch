import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    title = 'Hello Child Component';
    name = "Child CompF";
    DOB = '20/10/1988';
    @Input() set pullDataFromP(value: any) {
        this.name = value;
    }
    @Output() xtfhjvj: EventEmitter<any> = new EventEmitter<any>();
    passDatatoparent() {
        this.xtfhjvj.emit(this.DOB);
    }
}