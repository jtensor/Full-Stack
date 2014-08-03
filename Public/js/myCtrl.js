angular.module('fullStack')
	//.controller('myCtrl',['$scope', 'myService', function($scope, myService){
	.controller('myCtrl',function($scope, myService){
	$scope.test = "CSS is AWEsome";
	var famGet =function(){
		myService.famGet().then(function(res){
			$scope.fam = res;
		})
	}
	famGet();
});	
//}]);

