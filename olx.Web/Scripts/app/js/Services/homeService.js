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
var httpService_1 = require("../Shared/httpService");
var constants_1 = require("../Shared/constants");
var homeService = (function () {
    function homeService(httpSvc) {
        this.httpSvc = httpSvc;
        this.apiUrl = constants_1.globalConfig.apiEndPoint + constants_1.globalConfig.version.Site;
    }
    // by default public
    homeService.prototype.get_categorys = function () {
        var url = this.apiUrl + "/Home/getCategorys";
        return this.httpSvc.GetCache(url);
    };
    homeService.prototype.get_RegionOrCity = function () {
        var url = this.apiUrl + "/Home/get_RegionOrCity";
        return this.httpSvc.GetCache(url);
    };
    homeService.prototype.get_AllCategory = function () {
        var url = this.apiUrl + "/Home/getAllCategorys";
        return this.httpSvc.GetCache(url);
    };
    return homeService;
}());
homeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpService_1.httpService])
], homeService);
exports.homeService = homeService;
//# sourceMappingURL=homeService.js.map