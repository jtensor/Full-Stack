var myApp = angular.module('myApp');

myApp.controller('hobbyCtrl',['$scope', 'myService', function($scope, myService){
	
	var hobbyGet =function(){
		myService.hobbyGet().then(function(res){
			$scope.hobby = res;
		});
	};
	hobbyGet();

	$scope.hobbyPost = function(){
		myService.hobbyPost($scope.newHobby)
	};
}]);