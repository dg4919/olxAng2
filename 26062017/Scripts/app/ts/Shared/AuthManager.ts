import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { loginModalComponent } from '../Component/modal';

import { loginModalService } from '../Services/modalService';

@Injectable()
export class AuthManager implements CanActivate {

    constructor(
        private router: Router,
        public dialog: MdDialog,
        private loginModalSvc: loginModalService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('auth_user'))
            return true;

        // show login Modal =>  when user is not looged in
        this.loginModalSvc.get_loginModal()
            .subscribe(res => {
                if (res)
                    this.router.navigate([state.url]);
            });
    }
}