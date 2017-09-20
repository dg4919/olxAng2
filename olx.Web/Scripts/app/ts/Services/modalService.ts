import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {
    subCategory_ModalComponent,
    country_ModalComponent,
    adsCategory_ModalComponent
} from '../Component/modal';

@Injectable()
export class modalService {

    constructor(
        private router: Router,
        public dialog: MdDialog) { }

    get_subCategoryModal(category: any) {
        let dialogRef = this.dialog.open(subCategory_ModalComponent, {
            //height: '400px',
            width: '600px',
            data: { categoryModel: category }
        });

        return dialogRef.afterClosed();
    }

    get_countryModal() {
        let dialogRef = this.dialog.open(country_ModalComponent, {
            width: '1000px',
        });
        return dialogRef.afterClosed();
    }

    get_adsCategoryModal() {
        let dialogRef = this.dialog.open(adsCategory_ModalComponent, {
            width: '1000px',
        });
        return dialogRef.afterClosed();
    }
}


