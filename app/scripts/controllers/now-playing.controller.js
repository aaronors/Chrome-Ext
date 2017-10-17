angular.module('my-extension')
	.controller('NowPlayingController', function($scope) {
    $scope.items = [
    {
      title: 'SoundCloud',
      url: 'https://soundcloud.com/stream'
    }

    ];
	
		$scope.$watch(function(scope){return scope.items.length},
			function(newValue,oldValue){
				console.log(newValue);
				if(newValue != oldValue){
					 alert("List has changed!");
					}
				
			}
		);
});

// either watch is not calling $digest, or there is no data being moved 