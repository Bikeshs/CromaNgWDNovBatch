import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    title = 'Hello Parent Component';
    name = "Bikesh Srivastava parent";
    @Input() set pullDataFromP(value: any) {
        this.title = value;
    }
    @Output() sendDataToChild: EventEmitter<any> = new EventEmitter<any>();

    sendData() {
        this.sendDataToChild.emit(this.name);
    }
}