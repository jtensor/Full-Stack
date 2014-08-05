var myApp = angular.module('myApp');

myApp.controller('friendCtrl',['$scope', 'myService', function($scope, myService){
	$scope.test = "CSS is AWEsome";
	// var famGet =function(){
	// 	myService.famGet().then(function(res){
	// 		$scope.fam = res;
	// 	});
	// };
	// famGet();

	// var friendGet =function(){
	// 	myService.friendGet().then(function(res){
	// 		$scope.friend = res;
	// 	});
	// };
	// friendGet();

}]);