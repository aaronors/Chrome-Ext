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
    

		}];
	
		$scope.tempholder = [ "Place link here" ];
	
	$scope.sortableOptions = {
		connectWith: ".drop-target",
		placeholder: ".list-body"

	}
	
	$scope.$watch(function(scope) {return scope.nowplaying.length},
							function(newValue,oldValue){
								if(newValue != oldValue){
							 		alert('list has changed'+ newValue);
								
								}
							});
	
	$scope.isEmpty = function(){
		if (!$scope.nowplaying) { // when the last item is removed, this is called without a model.
      return true;
     } 
		else if($scope.nowplaying.length === 0){
			
			return true;
		}
		else{
			
			return false; 
		}
	}
	
});