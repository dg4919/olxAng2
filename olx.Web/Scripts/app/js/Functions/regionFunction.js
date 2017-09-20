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
var homeService_1 = require("../Services/homeService");
var regionFunction = (function () {
    function regionFunction(homeSvc) {
        // alert('in contructor.. call once');
        var _this = this;
        // initalizing variable so that it can access to the below fxs.. otherwise give rutime error
        this.popUpModel = {
            popularCity: [],
            state_UT: []
        };
        // scope to the constructor only
        homeSvc.get_RegionOrCity()
            .subscribe(function (data) {
            _this.country_andRegions = data.result;
            _this.getCountry_andRegions();
        }, function (error) { return console.log(error); });
    }
    regionFunction.prototype.getCountry_andRegions = function () {
        this.popUpModel.popularCity = this.parseModel(this.country_andRegions.filter(function (x) { return x.isPopular === true; }));
        this.popUpModel.state_UT = this.parse_state_UT();
    };
    regionFunction.prototype.parse_state_UT = function () {
        var _this = this;
        return this.chunk(this.country_andRegions.filter(function (x) { return x.Level === 1; }).map(function (x) {
            var a = {
                Id: x.Id,
                CityName: x.CityName,
                StateId: null,
                hasCity: _this.country_andRegions.some(function (a) { return a.ParentId === x.Id; })
            };
            return a;
        }), 4);
    };
    regionFunction.prototype.parseModel = function (list) {
        return list.map(function (x) {
            var a = {
                Id: x.Id,
                CityName: x.CityName,
                StateId: x.ParentId
            };
            return a;
        });
    };
    regionFunction.prototype.chunk = function (arr, size) {
        var newArr = [];
        var colSize = arr.length / size; // contain size of column
        if (arr.length % size !== 0)
            colSize += 1;
        for (var i = 0; i < arr.length; i += colSize) {
            newArr.push(arr.slice(i, colSize + i));
        }
        return newArr;
    };
    regionFunction.prototype.findCity = function (model) {
        var fixedContent = []; // initailse array to empty to use it below
        fixedContent.push({ Id: 0, CityName: 'Change Region', StateId: null });
        fixedContent.push({ Id: model.Id, CityName: 'Whole ' + model.CityName, StateId: null });
        var citys = this.parseModel(this.country_andRegions
            .filter(function (x) { return x.ParentId == model.Id; }));
        return this.chunk(fixedContent.concat(citys), 4); // concat witll merge 2 array data into single list
    };
    regionFunction.prototype.set_selectedCity = function (model) {
        this.selected_city = {
            Id: model.Id,
            CityName: model.StateId === null ? model.CityName.replace('Whole ', '') : model.CityName,
            StateName: model.StateId === null
                ? ''
                : this.country_andRegions.find(function (x) { return x.Id === model.StateId; }).CityName
        };
    };
    regionFunction.prototype.findSuggestion = function (srchTxt) {
        var _this = this;
        var res = (srchTxt.length <= 3)
            ? this.country_andRegions
                .filter(function (x) { return (x.CityName + "").toLowerCase().indexOf(srchTxt.toLowerCase()) === 0; })
            : this.country_andRegions
                .filter(function (x) { return (x.CityName + "").toLowerCase().includes(srchTxt.toLowerCase()); });
        return res.map(function (x) {
            var a = {
                Id: x.Id,
                CityName: x.CityName,
                StateName: x.Level === 1
                    ? 'State'
                    : _this.country_andRegions.find(function (a) { return a.Id === x.ParentId; }).CityName,
            };
            return a;
        });
    };
    return regionFunction;
}());
regionFunction = __decorate([
    core_1.Injectable() // use to emit/hide Metadata of service
    ,
    __metadata("design:paramtypes", [homeService_1.homeService])
], regionFunction);
exports.regionFunction = regionFunction;
//# sourceMappingURL=regionFunction.js.map