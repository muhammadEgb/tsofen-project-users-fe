import { EmailValidator } from "@angular/forms";

export class User {
    constructor(public id?:number, public fname:string = "", public lname:string = "", public email:string = "", 
        public phone:string = "", public password:string = "", public role:string = "", public status:boolean = true){}
}
