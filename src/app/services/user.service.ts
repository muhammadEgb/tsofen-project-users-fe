import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../moldels/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  private serverUrl = "http://localhost:8080/api/users/";

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.serverUrl+"getusers")
  }

  public getActiveUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.serverUrl+"getusersby?status=true")
  }

  public getInactiveUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.serverUrl+"getusersby?status=false")
  }

  public addUser(user: User): Observable<void>
  {
    return this.httpClient.post<void>(this.serverUrl + "adduser", user);
  }

  public updateUser(user: User): Observable<void>
  {
    return this.httpClient.put<void>(this.serverUrl + "edituser", user);
  }

  public login(email: string, password: string): Observable<boolean>
  {
    return this.httpClient.post<boolean>(this.serverUrl + "login", {email, password});
  }
}
