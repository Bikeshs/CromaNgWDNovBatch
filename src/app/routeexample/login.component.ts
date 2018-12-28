import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../registration/registration.model";
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    //providers: [UserService]
})
export class LoginComponent {
    title = 'Hello login Component';
    URL = 'https://fakerestapi.azurewebsites.net/api/Users';
    name = "";
    date;
    userList = [];
    objUser: User = new User();
    constructor(private http: Http, private route: Router, private userService: UserService) {

    }
    customOptions: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MM/DD/YYYY:hh:mm:ss',
        barTitleFormat: 'MMMM YYYY',
        dayNamesFormat: 'dd',
        firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
        //locale: frLocale,
        //minDate: new Date(Date.now()), // Minimal selectable date
        //maxDate: new Date(Date.now()),  // Maximal selectable date
        barTitleIfEmpty: 'Click to select a date',
        placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
        addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
        addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
        fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
        useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
    };
    showData() {
        this.userService.getUserData().subscribe(xyz => {
            this.userList = xyz.json();
        });

        // get data using promise
        // this.userService.getUserDataByPromise().toPromise().then(xyz => {
        //     this.userList = xyz.json();
        // })

        //direct caling
        // this.http.get(this.URL).subscribe(x => {
        //     this.userList = x.json();
        // });
    }
    saveData() {
        this.userService.saveData(this.objUser).subscribe(xyz => {
            console.log(xyz);
        });
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
    redirectToOtherComp() {
        this.route.navigate(['otherm']);
        //this.route.navigateByUrl("otherm");
    }
}