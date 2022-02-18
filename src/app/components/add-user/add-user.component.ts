import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/moldels/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  user:User = new User();

  ngOnInit(): void {
  }

  addStatus:boolean=false;
  picStatus:string=""
  add():void{
    this.userService.addUser(this.user).subscribe({
      next: () => {this.picStatus = "check"; this.addStatus=true;},
      error: () => {this.picStatus = "cross"; this.addStatus=true;}
    })
  }
}
