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

	this.friendGet=function(){
	 	return $http({
	 		method:'GET',
	 		url:'http://localhost:9090/friends'
	 	}).then(function(res){
	 		return res.data;
	 	});
	 };

	 this.hobbyGet=function(){
	 	return $http({
	 		method:'GET',
	 		url:'http://localhost:9090/hobbies'
	 	}).then(function(res){
	 		return res.data;
	 	});
	};

	this.meGet=function(){
	 	return $http({
	 		method:'GET',
	 		url:'http://localhost:9090/me'
	 	}).then(function(res){
	 		return res.data;
	 	});
	};

})