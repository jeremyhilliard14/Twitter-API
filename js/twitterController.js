var twitterApp = angular.module('twitterApp', ['ngRoute']);

twitterApp.config(function($routeProvider){
		console.log($routeProvider);
		$routeProvider.when('/',{
			templateUrl: 'candidate/front.html',
			controller: 'twitterController'
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
		controller: 'twitterController'
		});

});

twitterApp.controller('twitterController', function($scope, $http, $routeParams, $interval, $location){

	var url = 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=election2016';

	$http.get(url).success(function(data){
		$scope.data=data.statuses;
		for(i=0; i<$scope.data.length; i++){
		var time = $scope.data[i].created_at;
		var tweetTime = new Date(time);
		$scope.data[i].tweetSeconds = tweetTime.getTime()/1000;
		//console.log($scope.data[i].tweetSeconds);
		console.log($scope.data[i].user);

		$interval(function(){
			for(i=0; i<$scope.data.length; i++){
				var currentDate = new Date();
				var currentTimeInSeconds = currentDate.getTime()/1000;
				$scope.data[i].sinceTweeted = Math.floor(currentTimeInSeconds - $scope.data[i].tweetSeconds);
			};
		}, 1000);
	}
		
		//console.log(data.statuses);
	});

	$scope.go = function(path){
  		console.log(path);
  		$location.path(path);
  	}

 //  	$scope.trump = function(filter){
 //  		var newUrl = url + '&secondhash=' + filter;
 //  		$http.get(url).success(function(data){
	// 	$scope.data=data.statuses;
	// 	for(i=0; i<$scope.data.length; i++){
	// 	var time = $scope.data[i].created_at;
	// 	var tweetTime = new Date(time);
	// 	$scope.data[i].tweetSeconds = tweetTime.getTime()/1000;
	// 	//console.log($scope.data[i].tweetSeconds);
	// 	console.log($scope.data[i].user);

	// 	$interval(function(){
	// 		for(i=0; i<$scope.data.length; i++){
	// 			var currentDate = new Date();
	// 			var currentTimeInSeconds = currentDate.getTime()/1000;
	// 			$scope.data[i].sinceTweeted = Math.floor(currentTimeInSeconds - $scope.data[i].tweetSeconds);
	// 		};
	// 	}, 1000);
	// }

 //  	}
	
});

