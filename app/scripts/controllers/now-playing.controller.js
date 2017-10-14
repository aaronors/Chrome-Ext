angular.module('my-extension')
	.controller('NowPlayingController', function($scope) {
    $scope.items = [
    {
      title: 'SoundCloud',
      url: 'https://soundcloud.com/stream'
    }

    ];
	
		$scope.$watch(function(scope){return scope.items},
			function(newValue,oldValue){
				if(newValue != oldValue){
					 alert("List has changed!");
					}
				
			}
		);
});