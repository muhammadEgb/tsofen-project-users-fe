import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/moldels/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService:UserService) { }
  users:User[] = [];
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:(users:User[])=>{this.users=users;},
      error:(error)=>{alert("Couldn't Load Users!")}
    })
  }

  displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'role'];
  
}
