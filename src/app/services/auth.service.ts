import { TokenService } from './token.service';
import { User } from './../models/user.model';
import { Auth } from './../models/auth.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = `${environment.API_URL}/api/auth`
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }
  
  loginAndGetProfile(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => this.tokenService.saveToken(response.access_token)),
        switchMap(() => this.profile())
      )
  }
  
  profile() {
    return this.http.get<User>(`${this.apiUrl}/profile`)
  }
}
