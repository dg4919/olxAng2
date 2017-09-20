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
var stringFilter = (function () {
    function stringFilter() {
    }
    // Transform is the new "return function(value, args)" in Angular 1.x
    stringFilter.prototype.transform = function (value) {
        return (value.trim().replace(/ /g, '-')); // replace space with '-' in a string
    };
    return stringFilter;
}());
stringFilter = __decorate([
    core_1.Pipe({
        name: 'stringFilter'
    }),
    __metadata("design:paramtypes", [])
], stringFilter);
exports.stringFilter = stringFilter;
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (arr, prop, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (arr === undefined)
            return;
        var m = reverse ? -1 : 1;
        return arr.sort(function (a, b) {
            var x = a[prop];
            var y = b[prop];
            return (x === y) ? 0 : (x < y) ? -1 * m : 1 * m;
        });
    };
    return SortPipe;
}());
SortPipe = __decorate([
    core_1.Pipe({
        name: 'sortBy'
    }),
    __metadata("design:paramtypes", [])
], SortPipe);
exports.SortPipe = SortPipe;
//# sourceMappingURL=filters.js.map