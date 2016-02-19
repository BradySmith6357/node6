angular.module("mainModule", []);

angular.module("mainModule")
	.controller("mainTroller", ["$scope", "$http", "$sce", function($scope, $http, $sce){

	$scope.$sce = $sce

	$http.get("/api/videos")
		.then(function(serverData){
			$scope.videos = serverData.data
		})

	$scope.submitAVideo = function(){
		$http.post("api/videos", $scope.newVideo)
			.then(function(serverData){
				$scope.videos = serverData.data
				$scope.newVideo = {}
			})
	}

	// $scope.addVote = function(video){
	// 	video.votes = video.votes + 1
	// }

	$scope.addVote = function(vidName, $index){
		$http.post("/api/videos", {name: vidName})
			.then(function(serverData){
				$scope.videos.forEach(function(video){
					if(video.name === serverData.data.name){
						video.votes = serverData.data.votes
					}
				})
			})
			
		}

}])