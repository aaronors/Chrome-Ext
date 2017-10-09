angular.module('my-extension').controller('MainController', function($scope) {
    $scope.marks = [
    {
      title: 'Smashing magazine',
      url: 'https://www.smashingmagazine.com/'
    },
    {
      title: 'Markticle',
      url: 'https://markticle.com'
    }
    ];
});