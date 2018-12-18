import { Component } from "@angular/core";
import { Employee } from "./registration.model";
@Component({
    selector: 'emp-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {
    title = "Croma Employee registartion form";
    slectedValue: any;
    objEmplyee: Employee = new Employee();
    list = [];
    studentList = [];
    constructor() {
        this.list.push(
            { id: 1, name: 'Noida' },
            { id: 2, name: 'Delhi' },
            { id: 3, name: 'Lko' },
        );

        this.studentList.push(
            { stuId: 1, name: 'Bikesh', mobileNo: '123', marks: 29, status: '',DOB:'08/20/1988' },
            { stuId: 2, name: 'Navin', mobileNo: '1234', marks: 30, status: '' ,DOB:'10/20/2001' },
            { stuId: 3, name: 'Vinit', mobileNo: '12345', marks: 40, status: '',DOB:'02/20/2018'  },
            { stuId: 4, name: 'Salman', mobileNo: '123456', marks: 50, status: '',DOB:'08/20/2017'  },
            { stuId: 5, name: 'Amrish', mobileNo: '1234567', marks: 60, status: '',DOB:'08/20/2016'  },
            { stuId: 6, name: 'Sachin kumar', mobileNo: '12345678', marks: 70, status: '',DOB:'08/20/2011'  },
        );
    }
    saveData(obj) {
        console.log(obj);
    }
    getSelectedData(xyz) {
        console.log(this.slectedValue);
    }
    test() {
        alert('hii');
    }
}