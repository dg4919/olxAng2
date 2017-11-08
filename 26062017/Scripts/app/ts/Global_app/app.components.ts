// all components, directive will be register here :)

// main app TS files  >> components
import { HomeComponent, MenuComponent } from '../Component/home';
import { bookDetail_Component, bookList_Component } from '../Component/book';
import { CartBoxComponent,  viewCart_Component } from '../Component/cart';
import { shpingAdresComponent } from '../Component/user';

// Directives/ partial components
import {
    bindBooks_directiveComponent,
    bindBundle_directiveComponent,
    bookSearch_directiveComponent,
    cartAction_directiveComponent
} from '../Component/customDirective';    // Use './' for current directory

// modal component
import {
    loginModalComponent,
    countryModalComponent,
    shippingAdress_ModalComponent
} from '../Component/modal';

// snack bars for notifiaction msgs
import {
    cartItem_snackBarComponent,
    country_snackBarComponent
} from '../component/snackbars';

export const _components = [
    HomeComponent,
    MenuComponent,
    CartBoxComponent,
    bookList_Component,
    bookDetail_Component,
    viewCart_Component,
    shpingAdresComponent
];

export const _directives = [
    bindBooks_directiveComponent,
    bindBundle_directiveComponent,
    bookSearch_directiveComponent,
    cartAction_directiveComponent
];

export const _modals = [
    loginModalComponent,
    countryModalComponent,
    shippingAdress_ModalComponent
];

export const _snackBars = [
    cartItem_snackBarComponent,
    country_snackBarComponent
];


