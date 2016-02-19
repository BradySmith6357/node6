angular.module("mainModule", []);

angular.module("mainModule")
	.controller("mainTroller", ["$scope", "$http", "$sce", function($scope, $http, $sce){


		$scope.videos = [
	{
		name : "Brady",
		url : "https://www.youtube.com/watch?v=g708PmJAbuI",
		title : "Deadpool v Boba Fett",
		description : "Two of the universes biggest mercenaries go head to head"
	}
	]

	$scope.submitAVideo = function(){
		$http.post("api/videos", $scope.newVideo)
			.then(function(dataFromServer){
				$scope.videos = dataFromServer.data
				$scope.newVideo = {}
			})

	$http.get("/api/videos")
		.then(function(dataFromServer){
			$scope.videos = dataFromServer.data
		})
	}


}])