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

	
	

	$scope.sortableOptions = {
		connectWith: ".drop-target",
		
		update: onDragUpdate,
		stop: onDragStop,
		over: onDragOver


	}

	$scope.$watch(function(scope) {return $scope.nowplaying.length},
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




	
		function onDragUpdate(event,ui) {
		$scope.$apply(function() {
			if (ui.item.sortable.droptarget[0].classList[0] !== "drop-target")
        ui.item.sortable.cancel();
    	
		});
	}
	
		function onDragStop(event,ui) {
		$scope.$apply(function() {
  if (ui.item.sortable.droptarget[0].classList[0] == "drop-target") {
      
				$scope.nowplaying.pop(); 
        $scope.drag = false
      }
		});
	}
	
	function onDragOver(event,ui){
    if ($(this).children().length > 1) {
        $(ui.placeholder).css('display', 'none');
    } 
	}
											 




});


























