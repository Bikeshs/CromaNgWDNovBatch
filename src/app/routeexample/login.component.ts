import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../registration/registration.model";
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    //providers: [UserService]
})
export class LoginComponent {
    title = 'Hello login Component';
    name = "";
    userList = [];
    objUser: User = new User();
    constructor(private route: Router, private userService: UserService) {

    }
    showData() {
        // this.userService.getUserData().subscribe(xyz => {
        //     this.userList = xyz;
        // });
        // get data using promise
        this.userService.getUserDataByPromise().toPromise().then(xyz => {
            this.userList = xyz.json();
        })
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