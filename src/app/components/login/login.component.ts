import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { observable } from 'rxjs';
import { User } from 'src/app/moldels/user';
import { UserService } from 'src/app/services/user.service';

export interface UserDetails {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  user:User = new User();
  logStatus:boolean = false;
  picStatus:string = "";
  login(): void{
    this.userService.login(this.user.email, this.user.password).subscribe( 
      { next: ok => {
      if(ok){
        this.picStatus = "check"; this.logStatus=true;
      } else {
        this.picStatus = "cross"; this.logStatus=true;
      }
      }, error: () => {alert("ERROR!")},
    })
  }
}