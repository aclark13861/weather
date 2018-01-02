const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://heroku_sz82z631:f16s2jen6rmoltuqm5ntv4m66c@ds135747.mlab.com:35747/heroku_sz82z631';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

let Weather = require('../models/weather');

function displayWeather(req, response) {
	// console.log(req.token);
	let options = {
		url: "http://api.wunderground.com/api/e1d4afd4ba6ea0d5/conditions/q/CO/Denver.json",
		headers: {Authorization: "Bearer " + req.token}
	};
	request(options, function(err, res ,body) {
		if(err) {console.log("ERROR: " + err);}
		let bod = JSON.parse(body);
		let weather = bod.current_observation;
		response.render('index', { weather });
	});

	

}

function saveComments(req, response) {
	var myData = req.body.comment;

	Weather.find({}, function(err, docs) {
		console.log(docs[0]);
		console.log(docs[0].comments);
		console.log(docs[0].weather);
		docs[0].comments.push(myData);
		docs[0].save();
		console.log(docs[0].comments);
		console.log(docs[0]);
		
	});
	
	let options = {
		url: "http://api.wunderground.com/api/e1d4afd4ba6ea0d5/conditions/q/CO/Denver.json",
		headers: {Authorization: "Bearer " + req.token}
	};
	request(options, function(err, res ,body) {
		if(err) {console.log("ERROR: " + err);}
		let bod = JSON.parse(body);
		let weather = bod.current_observation;
		response.render('index', { weather });
	});

}



module.exports = {
	displayWeather: displayWeather,
	saveComments: saveComments
	
};
