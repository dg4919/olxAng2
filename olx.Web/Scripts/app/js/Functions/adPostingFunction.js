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
var adPosting_Function = (function () {
    function adPosting_Function(fb) {
        this.fb = fb;
        this.adPost = {
            price: [1, 2, 3],
            vehicle_kmsDriven: [68, 69, 110, 111],
            vehicle_model: [68, 110, 111],
            vehicle_year: [68, 69, 110, 111],
            vehicle_fuel: [68],
            vehicleGroup: [3, 4],
            realStateGroup: [12],
            realState_furnished: [223, 224, 247, 222, 248, 246, 249, 252],
            realState_bhk: [223, 247, 222, 248, 246, 249, 252],
            realState_sqrFt: [223, 247, 222, 248, 246, 249, 226, 251, 252],
            realState_sqrYard: [225, 250]
        };
    }
    // model contain the type of ad user is selected of ad category :)
    // fieldName > which column would be show/hide acording to selected ad category
    adPosting_Function.prototype.bindControl = function (model, fieldName) {
        // var can not use inside class but can use in method..
        var result = false;
        switch (fieldName) {
            case 'vehicleForm_group':
                if (this.adPost.vehicleGroup.indexOf(model.category_1.Id) > -1)
                    result = true;
                break;
            case 'vehicle_kmsDriven':
                if (this.adPost.vehicle_kmsDriven.indexOf(model.category_2.Id) > -1)
                    result = true;
                break;
            case 'vehicle_model':
                if (this.adPost.vehicle_model.indexOf(model.category_2.Id) > -1)
                    result = true;
                break;
            case 'vehicle_year':
                if (this.adPost.vehicle_year.indexOf(model.category_2.Id) > -1)
                    result = true;
                break;
            case 'vehicle_fuel':
                if (this.adPost.vehicle_fuel.indexOf(model.category_2.Id) > -1)
                    result = true;
                break;
            case 'realStateGroup':
                if (this.adPost.realStateGroup.indexOf(model.category_1.Id) > -1)
                    result = true;
                break;
            case 'realState_furnished':
                if (this.adPost.realState_furnished.indexOf(model.category_3.Id) > -1)
                    result = true;
                break;
            case 'realState_bhk':
                if (this.adPost.realState_bhk.indexOf(model.category_3.Id) > -1)
                    result = true;
                break;
            case 'realState_sqrFt':
                if (this.adPost.realState_sqrFt.indexOf(model.category_3.Id) > -1)
                    result = true;
                break;
            case 'realState_sqrYard':
                if (this.adPost.realState_sqrYard.indexOf(model.category_3.Id) > -1)
                    result = true;
                break;
        }
        return result;
    };
    return adPosting_Function;
}());
adPosting_Function = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], adPosting_Function);
exports.adPosting_Function = adPosting_Function;
//# sourceMappingURL=adPostingFunction.js.map