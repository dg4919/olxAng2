"use strict";
var adPosting_Model = (function () {
    function adPosting_Model() {
        this.title = ''; // this field will show in constructor of inhrited clas, bcoz it has initialized
        this.vehicleInfo = new vehicleModel();
        this.realStateInfo = new real_stateModel();
    }
    return adPosting_Model;
}());
exports.adPosting_Model = adPosting_Model;
var vehicleModel = (function () {
    function vehicleModel() {
    }
    return vehicleModel;
}());
exports.vehicleModel = vehicleModel;
var real_stateModel = (function () {
    function real_stateModel() {
    }
    return real_stateModel;
}());
exports.real_stateModel = real_stateModel;
//# sourceMappingURL=adPosting.js.map