// all filters, services will be register here :)
"use strict";
// filter is our services which inject in decalration part like component
var filters_1 = require("../Shared/filters");
exports._filters = [
    filters_1.stringFilter,
    filters_1.SortPipe
];
// services
var authService_1 = require("../Services/authService");
var httpService_1 = require("../Shared/httpService");
var modalService_1 = require("../Services/modalService");
var regionFunction_1 = require("../Functions/regionFunction");
var adPostingFunction_1 = require("../Functions/adPostingFunction");
exports.shared_services = [
    httpService_1.httpService,
    authService_1.authService,
];
// Global Services going here
var homeService_1 = require("../Services/homeService");
exports.app_services = [
    homeService_1.homeService,
    modalService_1.modalService,
    regionFunction_1.regionFunction,
    adPostingFunction_1.adPosting_Function
];
//# sourceMappingURL=app.services.js.map