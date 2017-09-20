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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/animations");
var regionFunction_1 = require("../Functions/regionFunction");
var homeService_1 = require("../Services/homeService");
var subCategory_ModalComponent = (function () {
    // The Constructor is a default method of the class that is executed when the class is instantiated 
    function subCategory_ModalComponent(entity, snackBar, dialogRef) {
        this.entity = entity;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.colorCode = [
            "#E65B0A",
            "#6A5DD4",
            "#AB6DE4",
            "#D676DC",
            "#3AE65F",
            "#8293E4",
            "#DC9E34",
            "#E4607F",
            "#dc572e",
            "#00ABA9",
            "#508DAB",
            "#877ABB",
            "#D21019"
        ];
        this.category = [];
    } // dialogRef use to close popup on html page
    // ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component
    subCategory_ModalComponent.prototype.ngOnInit = function () {
        this.category = this.entity.categoryModel;
    };
    return subCategory_ModalComponent;
}());
subCategory_ModalComponent = __decorate([
    core_1.Component({
        template: " <div md-dialog-title>   \n                <h4 style=\"margin: 0px !important;\"class=\"box-title\">{{ category.category_name }}</h4>         \n                <button type=\"button\" class=\"close\" style=\"margin-top: -20px !important;\" md-dialog-close>\u00D7</button> \n                <div class=\"panel panel-default\" style=\"margin-top: 10px;\">   \n                  <div class=\"panel-heading\">  \n                  <div class=\"row\">\n                      <div class=\"col-sm-6\"> \n                       <span> 123456 Ads\n                       <a href=\"#\"> View All </a> </span>\n                      </div>  \n                    <div class=\"col-sm-6 text-right\"> \n                     <i class=\"fa fa-map-marker\"> </i>\n                     <a href=\"#\"> All India </a> \n                  </div> </div> </div> </div> </div>       \n                <md-dialog-content style=\"padding: 15px 15px !important;\">                \n                  <div class=\"row\"> \n                    <div class=\"col-md-4 thumb no_line\" \n                        *ngFor=\"let category of category.sub_categorys; let $index = index\">  \n                       <a class=\"thumbnail no_line\" \n                          href=\"#\" \n                          (click)=\"get_categories(categry)\" \n                          style=\"text-align: center;margin-bottom: 15px !important;\">           \n                       <i [class]=\"category.icon_name\"                                         \n                          [style.color]=\"colorCode[$index]\"></i>                      \n                       <h4 class=\"text-center no_line\">                                         \n                           <small><strong>{{ category.category_name }}</strong> </small> \n                 </h4> </a> </div> </div>\n                </md-dialog-content> <md-dialog-actions class=\"pull-right\">\n                <button class=\"btn btn-info\" (click)=\"dialogRef.close(countryId)\" md-raised-button>OK</button> </md-dialog-actions> ",
    }),
    __param(0, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [Object, material_1.MdSnackBar,
        material_1.MdDialogRef])
], subCategory_ModalComponent);
exports.subCategory_ModalComponent = subCategory_ModalComponent;
var country_ModalComponent = (function () {
    function country_ModalComponent(regionSvc, dialogRef) {
        this.regionSvc = regionSvc;
        this.dialogRef = dialogRef;
        this.showCitys = false;
        this.suggestions = [];
    }
    country_ModalComponent.prototype.getCity = function (model) {
        this.showCitys = true;
        this.citys_chunk = this.regionSvc.findCity(model);
    };
    country_ModalComponent.prototype.selectCity = function (model) {
        if (model.Id === 0) {
            this.showCitys = false;
            return;
        }
        this.regionSvc.set_selectedCity(model);
        this.dialogRef.close();
    };
    country_ModalComponent.prototype.findSuggestion = function (srchTxt) {
        if (!srchTxt) {
            this.suggestions = [];
            return;
        }
        this.suggestions = this.regionSvc.findSuggestion(srchTxt);
    };
    country_ModalComponent.prototype.onSelectCity = function (model) {
        this.regionSvc.selected_city = {
            Id: model.Id,
            CityName: model.CityName,
            StateName: model.StateName
        };
        this.dialogRef.close();
    };
    return country_ModalComponent;
}());
country_ModalComponent = __decorate([
    core_1.Component({
        template: " <div md-dialog-title                \n                     style=\"font-size: inherit;\"> \n                <i class=\"close fa fa-close\" md-dialog-close> </i>       \n                <div class=\"row\">                        \n                <div style=\"position: relative;display: flex;\"> \n                <div class=\"col-md-4 col-xs-12\">        \n               <i class=\"fa fa-search pos_abs alignItm\"></i>        \n               <input type=\"text\"                       \n                      class=\"form-control1 txtIndent30\" \n                      #searchText\n                      placeholder=\"Enter your city or region\" \n                      (keyup)=\"findSuggestion(searchText.value)\"> </div>\n                <div class=\"col-md-12 sugestionBox_main\" *ngIf=\"suggestions.length\">\n                <div class=\"list-group sugestionBox\">\n                  <a href=\"#\" class=\"list-group-item\"\n                     (click)=\"onSelectCity(result)\" \n                     *ngFor=\"let result of suggestions\"> \n                  <span [innerHtml]=\"result.CityName + ','\"></span> \n                  <small style=\"color: #b4b4b4;\" [innerHtml]=\"result.StateName\"></small>\n                </a> </div></div>\n                </div> </div>\n                <div class=\"col-sm-12 col-xs-12 well well-sm\" \n                     style=\"margin-top: 7px !important;\"> \n                <h3><p>Popular cities:</p></h3>           \n                <div class=\"col-md-2 col-sm-6 col-xs-6\"                     \n                    *ngFor=\"let city of regionSvc.popUpModel.popularCity | sortBy: 'CityName'\"> \n                     <a href=\"#\" [innerHtml]=\"city.CityName\"></a> \n                </div></div> </div>           \n                <md-dialog-content *ngIf=\"regionSvc.popUpModel\" style=\"height: 320px;\">                  \n                <div class=\"row\"> \n                <div statesContainer\n                    *ngIf=\"!showCitys\">\n                <div class=\"col-md-3 no_pading\"                     \n                    *ngFor=\"let states_chunk of regionSvc.popUpModel.state_UT\"> \n                <div class=\"col-md-12\" style=\"padding: 5px 15px;\"\n                    *ngFor=\"let state of states_chunk\"> \n                  <a href=\"#\" [innerHtml]=\"state.CityName\"   \n                     (click)=\"state.hasCity && getCity(state)\"></a>  \n                </div> </div> </div>\n                <div citysContainer\n                    *ngIf=\"showCitys\"\n                    [@enterAnimation]>\n                <div class=\"col-md-3 no_pading\"     \n                    *ngFor=\"let citys of citys_chunk\"> \n                <div class=\"col-md-12\" style=\"padding: 5px 15px;\" \n                    *ngFor=\"let city of citys\"> \n                <a href=\"#\" [innerHtml]=\"city.CityName\" \n                   (click)=\"selectCity(city)\"></a> \n                </div></div> </div> </div> </md-dialog-content> ",
        animations: [
            animations_1.trigger('enterAnimation', [
                animations_1.transition(':enter', [
                    animations_1.style({ transform: 'translateX(100%)', opacity: 0 }),
                    animations_1.animate('500ms', animations_1.style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                animations_1.transition(':leave', [
                    animations_1.style({ transform: 'translateX(0)', opacity: 1 }),
                    animations_1.animate('500ms', animations_1.style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ])
        ],
    }),
    __metadata("design:paramtypes", [regionFunction_1.regionFunction,
        material_1.MdDialogRef])
], country_ModalComponent);
exports.country_ModalComponent = country_ModalComponent;
var adsCategory_ModalComponent = (function () {
    function adsCategory_ModalComponent(homeSvc, dialogRef) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.categorysList = [];
        this.colorCode = [
            '#E65B0A',
            '#6A5DD4',
            '#AB6DE4',
            '#D676DC',
            '#3AE65F',
            '#e8cd39',
            '#DC9E34',
            '#E4607F',
            '#0a5bc4',
            '#dc572e',
            '#00ABA9',
            '#f7322e'
        ];
        this.selectedCategory = {};
        homeSvc.get_AllCategory()
            .subscribe(function (data) { return _this.categorysList = data.result; }, function (error) { return console.log(error); });
    }
    adsCategory_ModalComponent.prototype.onSelect_adCategory = function (categoryModel, categoryLevel) {
        if (categoryLevel === 1) {
            this.selectedCategory.sceond_categoryInfo = categoryModel;
            this.selectedCategory.third_categoryInfo = {};
        }
        else if (categoryLevel === 2) {
            this.selectedCategory.third_categoryInfo = categoryModel;
            if (!categoryModel.categorys_3.length)
                this.closeModal();
        }
        else
            this.closeModal(categoryModel);
    };
    adsCategory_ModalComponent.prototype.closeModal = function (selectdCategory) {
        var model = {
            category_1: this.get_categoryModel(this.selectedCategory.sceond_categoryInfo),
            category_2: this.get_categoryModel(this.selectedCategory.third_categoryInfo),
            category_3: selectdCategory && this.get_categoryModel(selectdCategory)
        };
        // extending object 
        Object.assign(model.category_2, {
            icon_name: this.selectedCategory.third_categoryInfo.icon_name
        });
        this.dialogRef.close(model);
    };
    adsCategory_ModalComponent.prototype.get_categoryModel = function (category) {
        return ({
            Id: category.Id,
            name: category.category_name
        });
    };
    return adsCategory_ModalComponent;
}());
adsCategory_ModalComponent = __decorate([
    core_1.Component({
        templateUrl: '/templates/modal/adsCategory.html'
    }),
    __metadata("design:paramtypes", [homeService_1.homeService,
        material_1.MdDialogRef])
], adsCategory_ModalComponent);
exports.adsCategory_ModalComponent = adsCategory_ModalComponent;
//# sourceMappingURL=modal.js.map