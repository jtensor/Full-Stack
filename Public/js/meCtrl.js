var myApp = angular.module('myApp');

myApp.controller('meCtrl',['$scope', 'myService', function($scope, myService){
	
	var meGet =function(){
		myService.meGet().then(function(res){
			$scope.me = res;
		});
	};
	meGet();

}]);