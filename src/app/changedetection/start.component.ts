import { Component } from "@angular/core";
@Component({
    selector: 'start',
    templateUrl: './start.component.html'
})
export class StartComponent {
    title = 'Hello Start component to Parent';
    array: Array<any> = new Array<any>();
    click() {
        // this.array = new Array<any>();
        // this.array.push({ id: 1, name: 'Bikesh' });
        this.title = "Bikeee";
    }
    receiveData(obj) {
        alert(obj);
    }
}