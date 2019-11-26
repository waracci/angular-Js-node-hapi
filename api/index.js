'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        "routes": {
            "cors": true
        }
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, response) => {
            const dataFromDb = {
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
            };
            return response.response(dataFromDb);
        }
    });
    server.route({
        method: 'GET',
        path: '/{id}',
        handler: (request, response) => {
            const routeId = request.params.id;
            let singleDriverData = {}
            if (routeId == 1) {
                singleDriverData = {
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
            }
            const responseObj = {
                test: "API works",
                message: "success",
                driver: singleDriverData
            }

            return response.response(responseObj);
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();