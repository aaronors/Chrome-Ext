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
	  $scope.dragDirection = '';
    $scope.hovered = false;
	
	$scope.sortableOptions = {
		connectWith: ".drop-target",
		tolerance: 'pointer',
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
	
	
	$scope.addCurrentTab = function(){
		chrome.tabs.query({currentWindow: true, active: true},function(tabs) { // null defaults to current window
			var tabtitle = tabs[0].title;
			var taburl = tabs[0].url; 
			$scope.items.unshift({
				title: tabtitle,
				url: taburl
			});
		// ...
		});
	}
	
        function onDragStart() {
          // If the drag starts here, then we are dragging out.
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
            return false;
          } else {
            return $scope.nowplaying.length === 0;
          }
        };
});


























