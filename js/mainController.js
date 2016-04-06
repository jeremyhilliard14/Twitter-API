var twitterApp = angular.module('twitterApp', ['ngRoute']);

	twitterApp.config(function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'pages/front.html',
			controller: 'twitterController'
		});
		$routeProvider.when('/trump-tweets',{
			templateUrl: 'pages/trump-tweets.html',
			controller: 'trumpController'
		});
		$routeProvider.when('/hillary-tweets',{
			templateUrl: 'pages/hillary-tweets.html',
			controller: 'hillaryController'
		});
	});

twitterApp.controller('twitterController', function($scope, $http, $routeParams, $interval){

	var url = 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=trump&secondhash=hillary';

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