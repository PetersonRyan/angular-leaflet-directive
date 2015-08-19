var app = angular.module('app.home', []);

app.controller('HomeController', [ HomeController ]);
app.controller('HomeFirstExampleController', [ '$scope', HomeFirstExampleController ]);

function HomeController() {}

function HomeFirstExampleController($scope) {
    angular.extend($scope, {
        center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 4
        },
        tiles: {
            url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
}
