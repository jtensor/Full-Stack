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
		url:'/',
		templateUrl:'views/main.html',
		controller:'myCtrl'
	})
	.state('family',{
		url:'/family',
		templateUrl:'views/familyview.html',
		controller:'myCtrl'
	})
	.state('friends',{
		url:'/friends',
		templateUrl:'views/friendview.html',
		controller:'friendCtrl'
	})
	.state('hobbies',{
		url:'/hobbies',
		templateUrl:'views/hobbyview.html',
		controller:'myCtrl'
	})
	.state('me',{
		url:'/me',
		templateUrl:'views/meview.html',
		controller:'myCtrl'
	})
});