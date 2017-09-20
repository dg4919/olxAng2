(function (app) {

    var fn = function ($http, $q, globalConfig) {
        var apiUrl = globalConfig.apiEndPoint + globalConfig.version.Admin,
            fac = {};

            
        fac.get_categorybyId = function (_categoryId) {

            var defer = $q.defer();

            $http({
                url: apiUrl + '/Category/getBy_categoryId',
                method: 'GET',                
                params: {
                    categoryId: JSON.stringify(_categoryId)
                },
                cache: true
            })
                .success(function (d) {
                    defer.resolve(d);
                })
                .error(function (e) {
                    defer.reject('something went wrong..');
                });
            return defer.promise;
        }

          fac.updateCategory = function (_Id, iconName) {

            var defer = $q.defer();

            $http({
                url: apiUrl + '/Category/update_category',
                method: 'POST',                
                params: {
                    Id: _Id,
                    icon_name: iconName
                },
                cache: true
            })
                .success(function (d) {
                    defer.resolve(d);
                })
                .error(function (e) {
                    defer.reject('something went wrong..');
                });
            return defer.promise;
          }

          fac.createJson = function () {

              var defer = $q.defer();

              $http({
                  url: apiUrl + '/Category/create_categoryJson',
                  method: 'POST'
              })
                  .success(function (d) {
                      defer.resolve(d);
                  })
                  .error(function (e) {
                      defer.reject('something went wrong..');
                  });
              return defer.promise;
          }
          

        //****************  Country  ************************

          fac.createLocality = function (_model) {

            var defer = $q.defer();

            $http({
                url: apiUrl + '/LocalityMaster/create_locality',
                method: 'POST',                
                data: _model
            })
                .success(function (d) {
                    defer.resolve(d);
                })
                .error(function (e) {
                    defer.reject('something went wrong..');
                });
            return defer.promise;
          }

          fac.create_countryJson = function () {

              var defer = $q.defer();

              $http({
                  url: apiUrl + '/LocalityMaster/create_localityJson',
                  method: 'POST'
              })
                  .success(function (d) {
                      defer.resolve(d);
                  })
                  .error(function (e) {
                      defer.reject('something went wrong..');
                  });
              return defer.promise;
          }


        return fac;
    }

    angular
       .module('Olx_admin_service', [])
       .factory('service', ['$http', '$q', 'globalConfig', fn]);

})();