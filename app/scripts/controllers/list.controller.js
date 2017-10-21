angular.module('my-extension')
	.controller('ListController', function($scope,TabInfoService) {
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
	
	$scope.externalLink = '';

	$scope.tempholder = [ "Place link here" ];
	$scope.dragDirection = '';
	$scope.hovered = false;
	

	$scope.sortableOptions = {
		connectWith: ".drop-target",
		tolerance: 'intersect',
		start: onDragStart,
		stop: onDragStop,
		over: onDragOver,
		out: onDragOut
	}

	$scope.$watch(function(scope) {return scope.nowplaying.length},
								function(newValue,oldValue){
		if(newValue > 1){
			//alert('list has changed'+ newValue);

		}
	});

	
	$scope.addtab = function(){
		if(!$scope.externalLink){
			$scope.items.push($scope.externalLink);				// chek if valid url? input[url]
		}
		$scope.externalLink = '';
	}

	$scope.addCurrentTab = function(){

		TabInfoService.getTabInfo()
			.then(function(data){
				$scope.items.push(data);
			})
			.catch(function(){
			
			})
	} 



	function onDragStart(){

		$scope.$apply(function() {
			$scope.dragDirection = 'drag-out';
		});
	}

	function onDragStop() {
		$scope.$apply(function() {
			$scope.dragDirection = '';
		});
	}

	function onDragOver() {
		$scope.$apply(function() {
			$scope.hovered = true;
		});
	}

	function onDragOut() {
		$scope.$apply(function() {
			$scope.hovered = false;
		});
	}

	$scope.isEmpty = function() {
		if (!$scope.nowplaying) { // when the last item is removed, this is called without a model.
			return true;
		} else if ($scope.dragDirection === 'drag-out' && !$scope.hovered) { // when dragging last item out of a list
			return $scope.nowplaying.length <= 1;
		} else if ($scope.hovered) {
			return true;
		} else {
			return $scope.nowplaying.length === 0;
		}
	};
});


























