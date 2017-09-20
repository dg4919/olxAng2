(function () {
    'use strict';

    angular
        .module('Olx_admin_component')  // create a new module Here
        .component('category', {
            bindings:{
                categoryList: '<',   // 1 way binding
                categoryLevel: '@'  // string binding
            },
            template: '<div id="inventoryBox" class="row">                                              \
                <i class="fa myclass"                                                                   \
                   ng-class="show_Addbtn ? \'fa-minus-circle\' : \'fa-plus-circle\'"                    \
                   ng-click="toggleDiv($event)">                                                        \
                </i>                                                                                    \
                <div clas="row">                                                                        \
                <div ng-repeat="category in $ctrl.categoryList">                                        \
                <div class="clearfix" ng-if="$index % 6 == 0"></div>                                    \
                <div class="col-sm-2">                                                                  \
                <div class="thumbnail text-center">                                                     \
                    <a href="#" ng-click="updateCategory(category)">                                    \
                        <i class="fa fa-plus" style="position: absolute;right: 10px;top: -7px;"></i>    \
                    </a>                                                                                \
                <h4><a href="#" ng-click="get_subcategories(category.Id, $ctrl.categoryLevel)">         \
                <small ng-bind="category.category_name"></small></a></h4>                               \
                <i class="{{ category.icon_name }}" style="font-size: 2.0em;"></i>                      \
                <input type="text" ng-model="category.icon_name" class="form-control1 text-center">     \
            </div> </div> </div> </div> </div>',
            controller: ['$scope', '$rootScope', 'categoryService', function ($sc, $rsc, svc) {
                $sc.show_Addbtn = true;

                $sc.toggleDiv = function (event) {
                    var target = angular.element(event.currentTarget).next();

                    $sc.show_Addbtn = !$sc.show_Addbtn
                    target.toggle(200);
                }

                $sc.get_subcategories = function (_cateogryId, _cateogryLevel) {
                    var model = {
                        cateogryId: _cateogryId,
                        cateogryLevel: _cateogryLevel
                    };

                    $sc.$emit('on_get_subcategories', model);
                }
                
                $sc.updateCategory = function (category) {
                    svc.updateCategory(category.Id, category.icon_name)
                    .then(function (d) {
                        if (d.result === 'ok')
                            $rsc.notify_fx('category is updated..', 'success');
                        else
                            $rsc.notify_fx('category is not updated..', 'error');
                    })
                }

            }]
        })

    ;

})();
