require('angular');
require('angular-route');

(function(){
	'use strict';

	angular
	.module('App', ['ngRoute'])
	.config(RouteConfig)


	RouteConfig.$inject = ['$routeProvider']

	function RouteConfig($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/views/main.html',
			controller: 'AppController'
		})
		.otherwise({ redirectTo: '/' });
	}

})();
