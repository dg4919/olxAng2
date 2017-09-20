// all components, directive will be register here :)

// main app TS files  >> components
import { mainComponent, homeComponent } from '../Component/home';
import { adpostingComponent } from '../Component/adPosting';

// Directives/ partial components
import {
    headerComponent,
    searchProdct_Component,
    selectLocation_Component,
    homeCategorys_Component,
    adTxtBox_Component,
    ControlMessages,
} from '../Component/sharedComponent';    // Use './' for current directory

import {
    subCategory_ModalComponent,
    country_ModalComponent,
    adsCategory_ModalComponent
} from '../Component/modal';    // Use './' for current directory


export const _components = [
    homeComponent,
    mainComponent,
    adpostingComponent
];

export const _directives = [
    headerComponent,
    searchProdct_Component,
    selectLocation_Component,
    homeCategorys_Component,
    adTxtBox_Component,
    ControlMessages
];


export const _modals = [
    subCategory_ModalComponent,
    country_ModalComponent,
    adsCategory_ModalComponent
];


