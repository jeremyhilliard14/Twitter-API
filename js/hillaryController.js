twitterApp.controller('hillaryController', function($scope, $http, $routeParams, $interval){

	
	function hillaryTweets(){
		var url = 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=hillary';
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
	}
		//console.log(data.statuses);
	});