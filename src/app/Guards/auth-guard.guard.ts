import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../Services/current-user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router:Router, private currentUser:CurrentUserService) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if (this.currentUser.getCurrentUser().userName === 'asd' && 
    this.currentUser.getCurrentUser().password === 'asd')
    {
      return true;
    }
    else
    {
      this.currentUser.clear();
      console.warn('Unauthorised User')
      this.router.navigate(['/']);
    }
  }
  
}
