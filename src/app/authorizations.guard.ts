import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AdminService} from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationsGuard implements CanActivate {
  constructor(private  adminservice: AdminService , private   router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loggedIn = this.adminservice.IsLoggedIn();
    if (loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
