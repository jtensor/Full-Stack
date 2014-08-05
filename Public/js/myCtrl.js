var myApp = angular.module('myApp');

myApp.controller('myCtrl',['$scope', 'myService', function($scope, myService){
	$scope.test = "CSS is AWEsome";
	var famGet =function(){
		myService.famGet().then(function(res){
			$scope.fam = res;
		});
	};
	famGet();

}]);

