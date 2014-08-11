var myApp = angular.module('myApp');

myApp.service('myService',function($http, $q){

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

	this.famPost=function(famName,famAge,relation){
		//var deferred =$q.defer();
		return $http({
			method:'POST',
			url:'http://localhost:9090/family',
			//headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
			data:{name:famName,
					age:famAge,
					relationship:relation}
		}).success(function(){
			console.log(" added!");
			//deferred.resolve(data);
		}).error(function(err){
			//deferred.reject(err);
		});
		//return deferred.promise;
		}
	this.friendPost = function(fName,fAge,fMet){
		return $http({
			method: 'POST',
			url: 'http://localhost:9090/friends',
			data:{name:fName,
				age:fAge,
				met:fMet}
		}).success(function(){
			console.log("friend added!");
		}).error(function(err){
		});
	}	
	this.hobbyPost = function(newHobby){
		return $http({
			method:'POST',
			url: 'http://localhost:9090/hobbies',
			data:{
				hobby:newHobby}
		}).success(function(){
			console.log("hobby added!");
		}).error(function(err){

		});
	}
})


