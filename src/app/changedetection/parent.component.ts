import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    title = 'Hello Parent Component';
    Pname = "Bikesh Srivastava parent";
    DOB = "";
    @Input() set pullDataFromP(value: any) {
        this.title = value;
    }
    @Output() sendDataToChild: EventEmitter<any> = new EventEmitter<any>();

    sendData() {
        //this.sendDataToChild.emit(this.name);
        this.Pname = "Bikesh Srivastava data transfer for child Comp";
    }
    data(obj) {
        this.DOB = obj;
    }
}