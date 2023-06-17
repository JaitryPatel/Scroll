import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RegisterUser } from './register-user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  getRegisterUsers(page: number): Observable<RegisterUser[]> {
    return this.http.get(
      `https://api.thecatapi.com/v1/breeds?page=${page}&limit=10`
      // "https://dummy.restapiexample.com/api/v1/employees"
    ) as Observable<RegisterUser[]>;
  }
}
