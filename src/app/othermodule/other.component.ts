import { Component } from '@angular/core';
import { TestModel, TestModel1 } from "./other.model";
@Component({
    selector: 'other',
    templateUrl: './other.component.html'
})
export class OtherComponent {
    objClass: TestModel = new TestModel();
    unionDat: string | number | boolean;
    name: string;
    name1: string = "Bikesh";
    name2;
    name3: any;
    name4 = "";
    list = [];
    listOther = [1, , 3];
    list1: Array<number> = new Array<number>();
    list2: Array<number>;
    list3: any;
    
    constructor() {
        this.objClass.FirstName="hgyghfh";
        this.unionDat = 10;
        this.unionDat = "";
        this.unionDat = true;
    }
    saveData(): any {
        this.saveData1("bikesh");
        return 10;
    }
    saveData1(name: string) {

    }
}