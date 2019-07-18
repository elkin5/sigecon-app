import { Injectable } from '@angular/core';

//libreria para solicitudes api rest
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

import { ResponseI } from '../models/response-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];

  readonly API_URL = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUserByUsername(username: string) {
    return this.http.get(this.API_URL + `/username/${username}`);
  }

  getUserByEmail(email: string) {
    return this.http.get(this.API_URL + `/email/${email}`);
  }

  getUser() {
    return this.http.get(this.API_URL);
  }

  addUser(user: User): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.API_URL, user);
  }

  updateUser(user: User) {
    return this.http.put(this.API_URL + `/${user._id}`, user);
  }

  deleteUser(user: User) {
    return this.http.delete(this.API_URL + `/${user._id}`);
  }
}
