import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';

import { authService } from '../Services/authService';


@Component({
    selector: 'login-modal',
    templateUrl: '/templates/modal/userLoginModal.html',
})
export class loginModalComponent implements OnInit {
    userName: string = '';

    constructor(
        @Inject(MD_DIALOG_DATA) private entity: any,
        private authSvc: authService,
        private snackBar: MdSnackBar,
        private dialogRef: MdDialogRef<any>) { }    // dialogRef use to close popup on html page

    public ngOnInit() {
        this.userName = this.entity.userName;
    }

    onSubmit(formData: any) {
        this.authSvc
            .Login(Object.assign(formData, { verificationMode: 1 }))    // Object.assign is like angular.extend()
            .subscribe(
            (data: any) => {
                if (data === 'ok') {
                    this.snackBar.open('You have successfully login !', '', { duration: 3000 });
                    this.dialogRef.close(true);
                }
                else if (data === 'invalid')
                    this.snackBar.open('username or password is incorrect', '', { duration: 3000 });
                else if (data === 'notfound')
                    this.snackBar.open('You are not registered with us. Please sign up.', '', { duration: 3000 });
                else if (data === 'error')
                    this.snackBar.open('Something went wrong :(, Try again !', '', { duration: 3000 });
                else
                    this.snackBar.open('User role is not authorize !', '', { duration: 3000 });
            },
            (error: any) => console.log(error)
            );
    }

}

@Component({
    selector: 'country-modal',
    template: ` <div md-dialog-title>   
                <h4 style="margin: 0px !important;"class="box-title">Select Your Country</h4>         
                <button type="button" class="close" style="margin-top: -20px !important;" md-dialog-close>×</button> </div>       
                <md-dialog-content style="padding: 15px 15px !important;">
                <md-radio-group [(ngModel)]="countryId">                    
                <md-radio-button name="rd" value="1" class="col-md-6">India</md-radio-button>
                <md-radio-button name="rd" value="2">Outside India</md-radio-button>
                </md-radio-group> </md-dialog-content> <md-dialog-actions class="pull-right">
                <button class="btn btn-info" (click)="dialogRef.close(countryId)" md-raised-button>OK</button> </md-dialog-actions> `,
})
export class countryModalComponent {
    countryId: number;
    constructor(private dialogRef: MdDialogRef<any>) { }
}


@Component({
    templateUrl: '/templates/modal/user_shipping_Addressform.html',
})
export class shippingAdress_ModalComponent {
    constructor(private dialogRef: MdDialogRef<any>) { }

}

