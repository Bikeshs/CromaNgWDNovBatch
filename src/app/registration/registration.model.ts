export class Employee {
    FirstName: string;
    CityId: number;
    Gender1: string;
    Gender2: string;
    IsActive: boolean;
    constructor() {
        this.FirstName = "";
        this.CityId = 1;
        this.Gender1 = "Male";
        this.IsActive = false;
    }
}
export class User {
    public ID: number;
    public UserName: string;
    public Password: string;
    constructor() {
        this.ID = 1,
            this.UserName = "Bikesh";
        this.Password = "abcd";
    }
}