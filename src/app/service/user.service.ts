import { Injectable } from '@angular/core'
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
@Injectable()
export class UserService {
    URL = 'https://fakerestapi.azurewebsites.net/api/Users';
    constructor(private http: Http) {
        console.log('Hello user Service');
    }
    getUserData() {
        return this.http.get(this.URL).pipe(map(x => {
            return x.json();
        }))
    }
    getUserDataByPromise() {
        return this.http.get(this.URL);
    }

    saveData(userObj) {
        return this.http.post(this.URL, userObj).pipe(map(x => {
            return x.json();
        }))
    }
}