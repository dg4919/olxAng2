"use strict";
var router_1 = require("@angular/router");
// from main directory > from Ts find path
var home_1 = require("../Component/home"); // Use '../' to move out from directory
var adPosting_1 = require("../Component/adPosting");
var appRoutes = [
    {
        path: 'Home',
        component: home_1.mainComponent
    },
    {
        path: 'adPosting',
        component: adPosting_1.adpostingComponent
    },
    {
        path: '**',
        component: home_1.mainComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map