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
	
	    $scope.nowPlaying = [
    {
      title: ' ',
      url: 'https://twitter.com/sronoraa'
    },

    ];
});