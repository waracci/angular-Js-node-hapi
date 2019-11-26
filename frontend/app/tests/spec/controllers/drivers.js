describe("controller: driversController", function () {

    // Load the app module
    beforeEach(module("F1FeederApp"));

    var driversController, scope;
    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

        // Mock scope variable to replace the actual $scope variable
        scope = $rootScope.$new();

        //$http backend instance 
        httpMock = $httpBackend;

        // Backend standard response is set to the Url to be called by the controller
        httpMock.expectGET("http://localhost:3000")
            .respond({
                test: "API works",
                message: "success",
                drivers: [
                    {
                        driverId: 1,
                        Driver: {
                            givenName: 'Sebastian',
                            familyName: 'Vettel'
                        },
                        points: 322,
                        nationality: "German",
                        Constructors: [
                            { name: "Red Bull" }
                        ]
                    },
                    {
                        driverId: 2,
                        Driver: {
                            givenName: 'Fernando',
                            familyName: 'Alonso'
                        },
                        points: 207,
                        nationality: "Spanish",
                        Constructors: [
                            { name: "Ferrari" }
                        ]
                    },
                    {
                        driverId: 3,
                        Driver: {
                            givenName: 'Test',
                            familyName: 'Test Fam'
                        },
                        points: 297,
                        nationality: "Kenyan",
                        Constructors: [
                            { name: "Mobius" }
                        ]
                    }
                ]
            })

        // Initialize the controller and pass the new mock scope as parameter
        driversController = $controller('driversController', {
            $scope: scope
        });

        // Flush the backend to resolve the fake http call
        httpMock.flush();
    }))

    // Actual test check if the data is being retrieved
    it("should return a list with threee drivers", function() {
        expect(scope.driversList.length).toBe(3)
    })
})