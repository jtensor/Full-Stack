
var family = [
	{name:'Robert', age:37 , relationship:'hottest husband'},
	{name:'Brandon', age:13 , relationship:'taller than me son'},
	{name:'Sean', age:11 , relationship:'awesome-est son'},
	{name:'Natalia', age:8 , relationship:'bestest daughter'},
	{name:'Alauna', age:6 , relationship:'talking-est daughter'},
	{name:'Jena', age:33 , relationship:'closest sister'},
	//{name:'Jamie', age:35 , relationship:'self'},
	{name:'Jared', age:38 , relationship:'older brother'}
];
module.exports.getFamily = function(){
	return family;
};
module.exports.setFamily = function(newFamily){
	// console.log(newFamily);
	family.push(newFamily);
};
var friends = [
	{name:'Sarah', age:37 , met:'8 years ago'},
	{name:'Shandra', age:35 , met:'in 9th grade'},
	{name:'Char', age:45 , met:'5 years ago'},
	{name:'Karen', age:42 , met:'8 years ago'},
	{name:'Bill', age:30 , met:'5 years ago'}
];
module.exports.getFriends = function(){
	return friends;
};
module.exports.setFriends = function(newFriends){
	friends.push(newFriends);
};
var hobbies = [
	{hobby:'reading'},
	{hobby:'sleeping'},
	{hobby:'playing'},
	{hobby:'photo-editing'},
	{hobby:'parenting'}
];
module.exports.getHobbies = function(){
	return hobbies;
};
module.exports.setHobbies = function(newHobbies){
	hobbies.push(newHobbies);
};
var me = {name:'Jamie', 
	height:'64 in',
	age: 35, 
	"favoriteMovie": 'Prince of Persia', 
	"favoriteArtist":'Leonardo DaVinci', 
	"favoriteFood":'chocolate'
};
module.exports.getMe = function(){
	return me;
};
