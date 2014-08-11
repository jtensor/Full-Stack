var myApp = angular.module('myApp');

myApp.controller('friendCtrl',['$scope', 'myService', function($scope, myService){

	var friendGet =function(){
		myService.friendGet().then(function(res){
			$scope.friend = res;
		});
	};
	friendGet();

	$scope.friendPost = function(){
		myService.friendPost($scope.fName,$scope.fAge,$scope.fMet)
	};

}]);