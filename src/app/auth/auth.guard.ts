import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthState } from './store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router, private store: Store<AuthState>,
    private service: AuthService
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const role = route.data.role;
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigateByUrl('auth');
    }

    return this.service.checkToken(token).pipe(
      take(1),
      map(response => response.payload.authorities),
      map(roles => {
        roles = [...roles, 'ADMIN'];
        console.log('your role: ', roles);
        return this.checkRole(role, roles);
      }),
      catchError(error => {
        this.router.navigateByUrl('auth');
        return of(false);
      })
    );
  }


  checkRole(requireRole: string, avaiableRole: string[]): boolean {
    const result = avaiableRole.includes(requireRole);
    if (result) {
      return result;
    } else {
      this.router.navigate(['management', 'menu']);
      return result;
    }
  }

}
