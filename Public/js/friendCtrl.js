var myApp = angular.module('myApp');

myApp.controller('friendCtrl',['$scope', 'myService', function($scope, myService){

	var friendGet =function(){
		myService.friendGet().then(function(res){
			$scope.friend = res;
		});
	};
	friendGet();

}]);