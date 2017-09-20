"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var modalService_1 = require("../Services/modalService");
var homeComponent = (function () {
    function homeComponent() {
    }
    return homeComponent;
}());
homeComponent = __decorate([
    core_1.Component({
        // template bind with <home>'template would be display here'</home>
        // but if don't use selector then  <ng-component>'template would be display here'</ng-component>
        selector: 'home',
        templateUrl: '/templates/views/home.html',
    }),
    __metadata("design:paramtypes", [])
], homeComponent);
exports.homeComponent = homeComponent;
var mainComponent = (function () {
    function mainComponent(modalSvc) {
        this.modalSvc = modalSvc;
    }
    mainComponent.prototype.onSelect_adsCategory = function () {
        this.modalSvc.get_adsCategoryModal();
    };
    return mainComponent;
}());
mainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        template: "<div class=\"row\">                                          \n               <div class=\"panel\" style=\"padding: 20px 10px 20px 25px;\"> \n               <div class=\"row\"> <select-location></select-location>     \n               <search:prodct></search:prodct>                           \n               </div> </div> </div>                                      \n               <div class=\"row\"> <homeCategorys></homeCategorys> \n               <input type=\"button\" value=\"click Me\" (click)=\"onSelect_adsCategory()\" /></div> "
    }),
    __metadata("design:paramtypes", [modalService_1.modalService])
], mainComponent);
exports.mainComponent = mainComponent;
//# sourceMappingURL=home.js.map