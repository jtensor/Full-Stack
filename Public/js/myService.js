angular.module('fullStack')
	.service('myService',function($http){

 	this.famGet=function(){
 		return $http({
 			method:'GET',
 			url:'http://localhost:9090/family'
 		});
 	}

})