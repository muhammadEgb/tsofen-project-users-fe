import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/moldels/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users:User[] = [
    new User(1,"Ahmad", "Ahmad", "ahmad@gmail.com","1234567890", "123456", "Admin", true),
    new User(2,"Ali", "Ahmad", "ahmad@gmail.com","1234567890", "123456", "Teacher", true),
    new User(3,"Omar", "Ahmad", "ahmad@gmail.com","1234567890", "123456", "Parent", true)
  ]

  private logedIn : boolean = false;
}
