import { Injectable } from '@angular/core';

//imports para autenticacion
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseI } from '../models/response-i';

//import de configuracion
//TODO poner todos los parametros en un archivo de configuracion

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return this.http.post<ResponseI>(`http://localhost:3000/api/users/login`, { username, password })
      .pipe(map(res => {
        // almacena el usuario en el local storage y pasa el usuario
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        this.currentUserSubject.next(res);
        return res.user;
      }));
  }

  logout() {
    // remueve el usuario del local storage y pone el currenuser a nulo
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
