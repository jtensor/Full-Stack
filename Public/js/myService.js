var myApp = angular.module('myApp');

myApp.service('myService',function($http){

 	this.famGet=function(){
 		return $http({
 			method:'GET',
 			url:'http://localhost:9090/family'
 		}).then(function(res){
 			return res.data;
 		});
 	};

})