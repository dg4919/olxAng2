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
var modalService_1 = require("../Services/modalService");
var adPosting_1 = require("../Model/adPosting");
var adPostingFunction_1 = require("../Functions/adPostingFunction");
var adpostingComponent = (function () {
    function adpostingComponent(fb, modalSvc, adPosting_Fn) {
        this.fb = fb;
        this.modalSvc = modalSvc;
        this.adPosting_Fn = adPosting_Fn;
        this.adPost_Model = new adPosting_1.adPosting_Model();
        this.adPost_Model.title = 'this is title of my ad';
    }
    adpostingComponent.prototype.submitForm = function (formModel) {
        // this.adPost_form.value;
        // this.adPost_form.reset;
        //if (this.adPost_form.valid)
        //    alert('form is validated !');
        //else
        //    this.validateAllFormFields(this.adPost_form);
    };
    adpostingComponent.prototype.showAads_CategoryModal = function () {
        var _this = this;
        this.modalSvc.get_adsCategoryModal()
            .subscribe(function (modalResponse) {
            if (modalResponse) {
                _this.adPosting_Fn.selected_adCategory_model = modalResponse; // shared variable
            }
        });
    };
    adpostingComponent.prototype.validate = function (fieldName) {
        return this.adPosting_Fn.bindControl(this.adPosting_Fn.selected_adCategory_model, fieldName);
    };
    return adpostingComponent;
}());
adpostingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ad-posting-form',
        templateUrl: '/templates/views/adPosting.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        modalService_1.modalService,
        adPostingFunction_1.adPosting_Function])
], adpostingComponent);
exports.adpostingComponent = adpostingComponent;
//# sourceMappingURL=adPosting.js.map