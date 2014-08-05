//var myApp = angular.module('myApp', []);


// // this is for angular router
// var myApp = angular.module('myApp', ['ngRoute']);

// myApp.config(function($routeProvider){
// 	$routeProvider
// 		.when('/', {
// 			templateUrl:'/public/views/main.html'
// 		})
// 		.when('/family', {
// 			templateUrl:'/public/views/familyView.html',
// 			controller:'myCtrl'
// 		});
// });

//this is for angular ui-router
var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/view',
		controller:'myCtrl'
	})
	.state('family',{
		url:'#/family',
		controller:'myCtrl'
	})
	.state('friends',{
		url:'/friends',
		controller:'myCtrl'
	})
	.state('hobbies',{
		url:'/hobbies',
		controller:'myCtrl'
	})
	.state('me',{
		url:'/me',
		controller:'myCtrl'
	})
});