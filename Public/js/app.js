var app = angular.module('fullStack', []);
//var app = angular.module('fullStack', ['ui.router']);

//  this is for angular router
//fullStack.config(function($routeProvider){
// 	$routeProvider
// 		.when('/', {
// 			templateUrl:'/public/views/main.html'
// 		})
// 		.when("/family", {
// 			templateUrl:'/public/views/familyView.html'
// 		});
// });

//this is for angular ui-router
// app.config(function($stateProvider,$urlRouteProvider){
// 	$urlRouteProvider.otherwise('/');

// 	$stateProvider
// 	.state('home',{
// 		url:'/view',
// 		controller:'myCtrl'
// 	})
// 	.state('family',{
// 		url:'#/family',
// 		controller:'myCtrl'
// 	})
// 	.state('friends',{
// 		url:'/friends',
// 		controller:'myCtrl'
// 	})
// 	.state('hobbies',{
// 		url:'/hobbies',
// 		controller:'myCtrl'
// 	})
// 	.state('me',{
// 		url:'/me',
// 		controller:'myCtrl'
// 	})
// });