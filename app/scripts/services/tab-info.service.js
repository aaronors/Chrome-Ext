angular.module('my-extension')
	.service('TabInfoService',function($q){

	return({
		getTabInfo: getTabInfo
	});

	function getTabInfo(){

		var deferred = $q.defer();

		chrome.tabs.query({currentWindow: true, active: true},function(tabs) { // null defaults to current window
			var tabtitle = tabs[0].title;
			var taburl = tabs[0].url; 
			
			var data = {
				title: tabtitle,
				url: taburl				
			};

			deferred.resolve(data);
		});

		return deferred.promise; 
	}



});