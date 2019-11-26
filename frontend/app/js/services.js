const driverServices = angular.module("F1FeederApp.services", [])
driverServices.factory("backendApiService", [ '$http','$sce', function($http, $sce) {
    let backendApi = {};
    backendApi.getDrivers = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/"
        });
    }

    backendApi.getDriverDetails = function(id) {
        return $http({
          method: 'GET', 
          url: `http://localhost:3000/${id}`
        });
      }
  
    return backendApi;
}])