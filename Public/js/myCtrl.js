var myApp = angular.module('myApp');

myApp.controller('myCtrl',['$scope', 'myService', function($scope, myService){
	var famGet =function(){
		myService.famGet().then(function(res){
			$scope.fam = res;
		});
	};
	famGet();

	$scope.famPost = function(){
		myService.famPost($scope.famName,$scope.famAge,$scope.relation)
	};

}]);

