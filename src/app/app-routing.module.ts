import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path:"login" , component:LoginComponent},
  { path:"add-user" , component:AddUserComponent},
  { path:"show-users" , component:UsersListComponent},
  { path:"" , redirectTo:"log-in", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
