var twitterApp = angular.module('twitterApp', ['ngRoute']);

twitterApp.controller('mainController', function($routeProvider){

});


	twitterApp.config(function($routeProvider){
		console.log($routeProvider);
		$routeProvider.when('/',{
			templateUrl: 'candidate/front.html',
			controller: 'mainController'
		});
		// $routeProvider.when('/:candidate',{
		// 	controller: 'twitterController'
		// 	templateUrl: function($routeParams){
		// 	return 'candidate' + $routeParams.template + '.html';
		// };
		$routeProvider.when('/trump',{
			templateUrl: 'candidate/trump.html',
			controller: 'twitterController'
		});
		$routeProvider.when('/hillary',{
			templateUrl: 'candidate/hillary.html',
			controller: 'twitterController'
		});
		$routeProvider.otherwise({
		redirectTo: '/',
		templateUrl: 'candidate/front.html',
		controller: 'mainController'
		});

	});
	


