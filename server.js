var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))

app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Method','OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next()
});
var index = "hello world";
app.get('/',function(req,res){
	res.send(index);
});
app.get('/view', function(req,res){

	res.render('/public/index.html');
})

var myData = require('./server-assets/myData.js');
var myFamily = [];

app.get('/family',function(req,res){
	myFamily = myData.getFamily();
	res.send(myFamily);
});
app.post('/family', function(req, res){
	var newFamily = {
		name: req.body.famName,
		age: req.body.famAge,
		relationship: req.body.relation
	};
	console.log(newFamily);
	//var setFamily = myData.setFamily(newFamily);
	myFamily.push(newFamily);
	res.status(201).end(newFamily);
});

app.get('/friends',function(req,res){
	var myFriends = myData.getFriends();
	res.send(myFriends);
});
app.post('/friends',function(req,res){
	var newFriends = {
		name:req.body.name,
		age:req.body.age,
		met:req.body.met
	};
	var setFriends = myData.setFriends(newFriends);
	res.status(201).end();
});

app.get('/hobbies',function(req,res){
	var myHobbies = myData.getHobbies();
	res.send(myHobbies);
});
app.post('/hobbies',function(req, res){
	var newHobbies = {
		hobby:req.body.hobby
	};
	var setHobbies = myData.setHobbies(newHobbies);
	res.status(201).end();
});
app.get('/me',function(req, res){
	var myMe = myData.getMe();
	res.send(myMe);
});


app.listen(9090);




