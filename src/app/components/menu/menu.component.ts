import { Component, OnInit } from '@angular/core';

interface option{
  name?:string;
  route?:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: option[] = [
    {name:"Login",route: "login"},
    {name:"Show Users",route: "show-users"},
    {name:"Add a User",route: "add-user"}
  ]

}
