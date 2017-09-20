// all components, directive will be register here :)
"use strict";
// main app TS files  >> components
var home_1 = require("../Component/home");
var adPosting_1 = require("../Component/adPosting");
// Directives/ partial components
var sharedComponent_1 = require("../Component/sharedComponent"); // Use './' for current directory
var modal_1 = require("../Component/modal"); // Use './' for current directory
exports._components = [
    home_1.homeComponent,
    home_1.mainComponent,
    adPosting_1.adpostingComponent
];
exports._directives = [
    sharedComponent_1.headerComponent,
    sharedComponent_1.searchProdct_Component,
    sharedComponent_1.selectLocation_Component,
    sharedComponent_1.homeCategorys_Component,
    sharedComponent_1.adTxtBox_Component,
    sharedComponent_1.ControlMessages
];
exports._modals = [
    modal_1.subCategory_ModalComponent,
    modal_1.country_ModalComponent,
    modal_1.adsCategory_ModalComponent
];
//# sourceMappingURL=app.components.js.map