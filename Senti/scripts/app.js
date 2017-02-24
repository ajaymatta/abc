'use strict';

// declare modules
angular.module('Home', []);

var SentiApp = angular.module('SentiApp', [ 'Home','ngRoute'])

SentiApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/main/views/home.html'
        })        
        .otherwise({redirectTo: '/'});
}])


/*SentiApp.config(['$httpProvider',
    function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    //$httpProvider.interceptors.push('urlChanger'); //VERY IMPORTANT : THIS LINE NEEDS TO BE COMMENTED BEFORE CHECKING IN 
    $httpProvider.defaults.headers.common = {'Content-Type': 'application/json, text/plain'};
    $httpProvider.defaults.headers.common['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.common['Pragma'] = 'no-cache';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]) 

*/


