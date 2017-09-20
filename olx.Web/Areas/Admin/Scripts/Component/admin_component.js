(function () {
    'use strict';

    angular
        .module('Olx_admin_component', [])  // create a new module Here
        .component('categoryMasterList', {
            templateUrl: 'Areas/Admin/Templates/categoryMaster_create.html',
            controller: ['$scope', '$rootScope', 'service', function ($sc, $rsc, svc) {
                $sc.userName = 'Divya Gupta';
                $sc.categorys = {
                    first_categry: [],
                    second_categry: [],
                    third_categry: [],
                };

                $sc.get_categories = function (categoryModel) {

                    svc.get_categorybyId(categoryModel.cateogryId)
                   .then(function (d) {

                       switch (parseInt(categoryModel.cateogryLevel)) {
                           case 1:
                               $sc.categorys.first_categry = d.result;
                               break;
                           case 2:
                               $sc.categorys.second_categry = d.result;
                               break;
                           case 3:
                               $sc.categorys.third_categry = d.result;
                               break;
                       }

                   });
                }

                $sc.get_categories({ cateogryId: null, cateogryLevel: 1 });

                $sc.$on('on_get_subcategories', function (event, args) {
                    $sc.get_categories(args);
                });

                $sc.createJson = function () {
                    svc.createJson()
                       .then(function (d) {
                           if (d.result === 'ok') {
                               $rsc.notify_fx('Json has been created :)', 'info');
                           }
                       });
                }

            }]
        })

        //************* Country Component  ******************
    .component('localityMasterCreate', {
        templateUrl: 'Areas/Admin/Templates/localityMaster_create.html',
        controller: ['$scope', '$rootScope', 'service', function ($sc, $rsc, svc) {

            $sc.clikMe = function () {
                var arr = [];

                // not taken >>  http://post.vivastreet.co.in/     &&   // for click.in 
                // for click.in    >>   http://www.indiansclassifieds.com/index.php?page=item&action=item_add

                var lst = $('#select2-results-3')
                     .find('.select2-result-label');

                for (var i = 0; i < lst.length; i++) {
                    if (i !== 0)
                        arr.push($(lst[i]).text());
                }


                // for olx
                var lst = $('#subregionslinks')
                     .find('span');

                for (var i = 0; i < lst.length; i++) {
                    arr.push($(lst[i]).text());
                }

                // for indiansclassifieds
                var lstt = $('#cityId')
                     .find('option');

                for (var i = 0; i < lstt.length; i++) {
                    arr.push($(lstt[i]).text());
                }


                var model = {
                    cityNames: arr,
                    cityId: 7
                };

              // svc.createLocality(model);
            }

            $sc.createJson = function () {
                svc.create_countryJson()
                       .then(function (d) {
                           if (d.result === 'ok') {
                               $rsc.notify_fx('Json has been created :)', 'info');
                           }
                       });
            }

        }]
    })
    ;

})();
