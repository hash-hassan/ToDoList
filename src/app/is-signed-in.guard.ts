import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class IsNotSignedInGuard implements CanActivate {
  
  constructor(private router:Router, private currentUser:CurrentUserService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.currentUser.isSignedIn())
      {        
        console.log("User not signed IN")
        return true
      }
      else
      {
        this.router.navigate(['/list']);
      }
  }
  
}
