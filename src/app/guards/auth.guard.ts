import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from '../services/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private auth : AuthService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(!this.tokenService.getToken()){
    //   this.router.navigate(['/home'])
    //   return false
    // }
    // return true;
    return this.auth.user$
      .pipe(
        map(user => {
          if(!user){
            this.router.navigate(['/home'])
            return false
          }
          return true 
        })
      )
  }
  
}
