'use strict';

angular.module('Home')

.factory('getService', ['$http', function ($http) {

    var service = {};

    service.getCategories = function(callback){
        var config = {};
            config = { 
                method: 'GET', 
                url: '/abc//'
                //url: 'data/ideas.json',
                };

            $http(config).then(function successCallback(response) {

                var categoriesResponse = response.data;  
                console.log(categoriesResponse);                         
                callback(categoriesResponse);

            }, function errorCallback(response) {
                callback(null);                   
            });
    }
    return service;

}
])