angular.module('my-extension')
	.controller('ListController', function($scope) {
    $scope.items = [
    {
      title: 'Twitter',
      url: 'https://twitter.com/sronoraa'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/'
    },
    {
      title: 'AndroidOnline',
      url: 'https://androidonline.wordpress.com/'
    }
    ];
	
	  $scope.nowplaying = [
    {
      title: 'SoundCloud',
      url: 'https://soundcloud.com/stream' 
    }

    ];
	
	$scope.sortableOptions = {
		connectWith: ".list-body"
	}
	
	$scope.$watch(function(scope) {return scope.items.length},
							function(newValue,oldValue){
								if(newValue != oldValue){
							 		alert('list has changed');
								
								}
							});
	
	$scope.isEmpty = function(){
		
		if(!$scope.nowplaying){
			alert('in here');
			return true;
		}
		else{
			return false; 
		}
	}
	
});