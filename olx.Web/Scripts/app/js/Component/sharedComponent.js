//  this path contains Partial components / Directives
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
var forms_1 = require("@angular/forms");
var validationService_1 = require("../Services/validationService");
var homeService_1 = require("../Services/homeService");
var modalService_1 = require("../Services/modalService");
var regionFunction_1 = require("../Functions/regionFunction");
var headerComponent = (function () {
    function headerComponent() {
    }
    return headerComponent;
}());
headerComponent = __decorate([
    core_1.Component({
        // dont use ':' = (book:info) > coz its bind only right part.. So use [book-info OR book_info]
        selector: 'header',
        template: "<div class=\"row\">\n                <nav class=\"navbar navbar-inverse customNav\">\n                    <div class=\"container-fluid\">\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                        </button>\n                    <a class=\"navbar-brand\" href=\"#\">Olx Site</a> </div>\n               <div class=\"navbar-collapse collapse in\" id=\"myNavbar\">\n                  <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"#\" title=\"favourites\"><span class=\"fa fa-star fa-lg\"></span></a></li>\n                    <li><a href=\"#\"><span class=\"fa fa-user\"></span><label> Account </label></a></li>\n                    <li><a href=\"#\"><span class=\"fa fa-key\"></span>Register</a></li>\n                    <li><a href=\"#\"><span class=\"fa fa-user\"></span>Login</a></li>\n                    <li> <div class=\"btn btn-group\">\n                            <input type=\"button\" class=\"btn btn-default\" value=\"Post a free Ad\">\n                    </div> </li></ul></div></div></nav></div>",
    }),
    __metadata("design:paramtypes", [])
], headerComponent);
exports.headerComponent = headerComponent;
var selectLocation_Component = (function () {
    function selectLocation_Component(modalSvc, regionSvc) {
        this.modalSvc = modalSvc;
        this.regionSvc = regionSvc;
    }
    selectLocation_Component.prototype.get_countryModal = function () {
        this.modalSvc.get_countryModal();
    };
    return selectLocation_Component;
}());
selectLocation_Component = __decorate([
    core_1.Component({
        selector: 'select-location',
        template: "<div class=\"col-md-3 col-sm-4 col-xs-12 mrgBtm_8\">\n                         <i class=\"fa fa-map-marker pos_abs alignItm\" \n                            title=\"Select your City\"                  \n                            (click)=\"get_countryModal()\"             \n                            style=\"font-size: 1.3em;\"></i>            \n                            <i class=\"fa fa-close pos_abs alignClose\" \n                            title=\"Remove Selected City\"></i>        \n                         <div class=\"form-control1 txtIndent25\"       \n                              style=\"font-size: 1.0em; padding: 7px;\" \n                              (click)=\"get_countryModal()\">          \n                         <span *ngIf=\"!regionSvc.selected_city\"                 \n                               style=\"color: #b4b4b4;\">               \n                               All India </span>                      \n                         <p *ngIf=\"regionSvc.selected_city\" class=\"locationLabel\">\n                            <span>{{ regionSvc.selected_city.CityName }}{{ regionSvc.selected_city.StateName && ', '}}</span>\n                            <small style=\"color: #b4b4b4;\"                  \n                                   [innerHtml]=\"regionSvc.selected_city.StateName\"></small>\n                          </p></div></div>                                        ",
    }),
    __metadata("design:paramtypes", [modalService_1.modalService,
        regionFunction_1.regionFunction])
], selectLocation_Component);
exports.selectLocation_Component = selectLocation_Component;
var searchProdct_Component = (function () {
    function searchProdct_Component() {
    }
    return searchProdct_Component;
}());
searchProdct_Component = __decorate([
    core_1.Component({
        selector: 'search:prodct',
        template: "<div class=\"col-md-7 col-sm-5 col-xs-12 mrgBtm_8\">                   \n               <i class=\"fa fa-search pos_abs alignItm\" title=\"Search Anything\"></i>\n               <input type=\"text\" class=\"form-control1 alignTxt txtIndent25\" placeholder=\"What you want to search ?\"></div>\n               <div class=\"col-md-2 col-sm-3 col-xs-12 mrgBtm_8\">       \n               <button class=\"btn btn-info\" value=\"Search\">             \n               <i class=\"fa fa-search\"></i> Search </button> </div> ",
    }),
    __metadata("design:paramtypes", [])
], searchProdct_Component);
exports.searchProdct_Component = searchProdct_Component;
var homeCategorys_Component = (function () {
    function homeCategorys_Component(homeSvc, modalSvc) {
        this.homeSvc = homeSvc;
        this.modalSvc = modalSvc;
        this.categoryList = [];
        this.colorCode = [
            '#DC7A7A',
            '#e8cd39',
            '#b200ff',
            '#f37b53',
            '#61b9ff',
            '#4daf7b',
            '#D80073',
            '#dc572e',
            '#0a5bc4',
            '#FFB400',
            '#00ABA9',
            '#A4C400'
        ];
    }
    homeCategorys_Component.prototype.ngOnInit = function () {
        var _this = this;
        this.homeSvc
            .get_categorys()
            .subscribe(function (data) { return _this.categoryList = data.result; }, function (error) { return console.log(error); });
    };
    homeCategorys_Component.prototype.showModel = function (category) {
        this.modalSvc
            .get_subCategoryModal(category);
    };
    return homeCategorys_Component;
}());
homeCategorys_Component = __decorate([
    core_1.Component({
        selector: 'homeCategorys',
        template: "<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\"                        \n                    *ngFor=\"let category of categoryList; let $index = index\"                                \n                    (click)=\"showModel(category)\">                                  \n               <div class=\"metro_div\" [style.background]=\"colorCode[$index]\"> \n               <a href=\"#\"> <i [class]=\"category.icon_name\"></i>                       \n                   <p class=\"title\" [innerHtml]=\"category.category_name\"></p>               \n               </a> </div> </div> ",
    }),
    __metadata("design:paramtypes", [homeService_1.homeService,
        modalService_1.modalService])
], homeCategorys_Component);
exports.homeCategorys_Component = homeCategorys_Component;
var adTxtBox_Component = (function () {
    function adTxtBox_Component() {
    }
    return adTxtBox_Component;
}());
adTxtBox_Component = __decorate([
    core_1.Component({
        selector: 'txtBox',
        template: "<div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\"\n                       [innerHtml]=\"labelName\"></label>\n                <div [class]=\"controlClass\">\n                    <ng-content></ng-content>\n                    <control-messages [control]=\"controlName\"></control-messages>\n                </div>\n            </div>",
        inputs: ['controlName', 'controlClass', 'labelName']
    }),
    __metadata("design:paramtypes", [])
], adTxtBox_Component);
exports.adTxtBox_Component = adTxtBox_Component;
var ControlMessages = (function () {
    function ControlMessages() {
    }
    Object.defineProperty(ControlMessages.prototype, "errorMessage", {
        // errorMessage is input param, its kind of property get & set
        get: function () {
            // debugger;
            if (this.control) {
                for (var propertyName in this.control.errors) {
                    if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                        return validationService_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessages;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], ControlMessages.prototype, "control", void 0);
ControlMessages = __decorate([
    core_1.Component({
        selector: 'control-messages',
        template: "<span class=\"text-danger\"\n                     *ngIf=\"errorMessage\">\n                 {{errorMessage}}\n               </span>"
    }),
    __metadata("design:paramtypes", [])
], ControlMessages);
exports.ControlMessages = ControlMessages;
//# sourceMappingURL=sharedComponent.js.map