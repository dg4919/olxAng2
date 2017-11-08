import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { country_snackBarComponent } from '../component/snackbars';

import { bookFunction } from '../Shared/bookFunctions';
import { countryModalService } from '../Services/modalService';


@Component({
    selector: 'cart_Box',
    templateUrl: '/templates/Partials/cartBox.html',
})
export class CartBoxComponent {
    // this private must use at time of DI
    constructor(
        @Inject('book_comonFunction') private rsc: bookFunction,
        private router: Router,
        private countryModalSvc: countryModalService) { }

    proceed() {

        this.countryModalSvc.get_countryModal()
            .subscribe(countryCode => {
                let cntryCode = parseInt(countryCode);
                if (cntryCode) {
                    this.rsc.cart.CountryType = cntryCode;
                    this.rsc.set_shippingCharges(cntryCode);
                    this.router.navigate(['/viewCart']);
                }
                else
                    this.rsc.snackBar.openFromComponent(country_snackBarComponent, {
                        duration: 3000,       // if not set, will pe show permanently
                    });

            });
    }

}


@Component({
    selector: 'view:cart',
    templateUrl: '/templates/views/Cart/cart_detail.html',
})
export class viewCart_Component {

    constructor(
        @Inject('book_comonFunction') private rsc: bookFunction,
    ) { }

}

