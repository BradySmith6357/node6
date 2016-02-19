angular.module("mainModule", []);

angular.module("mainModule")
	.controller("mainTroller", ["$scope", "$http", "$sce", function($scope, $http, $sce){

	$scope.greeting = "Let the votes be cast!"

	$scope.$sce = $sce
	
	$http.get("/api/videos")
		.then(function(dataFromServer){
			$scope.videos = dataFromServer.data
		})

	$scope.submitAVideo = function(){
		$http.post("api/videos", $scope.newVideo)
			.then(function(dataFromServer){
				$scope.videos = dataFromServer.data
				$scope.newVideo = {}
			})
	}


}])