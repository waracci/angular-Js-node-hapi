const driversApp = angular.module('F1FeederApp.controllers', [])

/*
  Drivers Controller
*/
driversApp.controller('driversController', function ($scope, backendApiService) {
    $scope.name = 'Drivers Hub';
    $scope.nameFilter = null;
    $scope.driversList = [];

    $scope.greenText = {
        "color" : "green"
    }

    $scope.searchFilter = function (driver) {
        let keyword = new RegExp($scope.nameFilter, 'i');
        $scope.searchKeyword = $scope.nameFilter
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName)
    }

    backendApiService.getDrivers().then(function (response) {
        console.log('response from API', response.data);
        $scope.driversList = response.data.drivers
    }, (err) => {
        throw err;
    })
});


/*
  Driver Controller
*/
driversApp.controller("driverController", function ($scope, $routeParams, backendApiService) {
    $scope.id = $routeParams.id
    $scope.driver = null

    backendApiService.getDriverDetails($scope.id).then((response) => {
        console.log(response)
        $scope.driver = response.data.driver
    })
})
