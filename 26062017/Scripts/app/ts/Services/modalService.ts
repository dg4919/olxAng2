import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { loginModalComponent, countryModalComponent, shippingAdress_ModalComponent } from '../Component/modal';

@Injectable()
export class loginModalService {

    constructor(
        private router: Router,
        public dialog: MdDialog) { }

    get_loginModal() {
        let dialogRef = this.dialog.open(loginModalComponent, {
            height: '320px',
            width: '500px',
            data: { userName: 'Divya' }
        });

       return dialogRef.afterClosed();
    }

}

@Injectable()
export class countryModalService {

    constructor(
        private router: Router,
        public dialog: MdDialog) { }

    get_countryModal() {
        let dialogRef = this.dialog.open(countryModalComponent, {
            height: '195px',
            width: '300px'
        });

        return dialogRef.afterClosed();
    }
}


@Injectable()
export class shippingAdres_ModalService {

    constructor(
        private router: Router,
        public dialog: MdDialog) { }

    get_shippingModal() {
        let dialogRef = this.dialog.open(shippingAdress_ModalComponent, {
            width: '550px'
        });

        return dialogRef.afterClosed();
    }
}