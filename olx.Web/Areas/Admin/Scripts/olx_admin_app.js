(function () {

    var configFn = function ($stateProvider, $urlRouterProvider) {
      
        // Default Url, if any URL not match, redirect to it
        $urlRouterProvider.otherwise('/Admin/Category/List');

        $stateProvider
            .state("category_List", {
                url: '/Admin/Category/List',
                template: '<category-master-list></category-master-list>',
            })
            
            .state("locality_Create", {
                url: '/Admin/Locality/Create',
                template: '<locality:master_create></locality:master_create>',
            })

        ;
    }

    var moduleDependencies =
    [
        'olx_common_App',
        'Olx_admin_component',
        'Olx_admin_service'
    ];

    angular.module('olxAdmin_App', moduleDependencies)
    .config(['$stateProvider', '$urlRouterProvider', configFn])
    
    ;

})();
