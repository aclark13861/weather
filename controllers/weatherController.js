const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/weather';
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

function saveComments(req,response) {
	Weather.find(req.body.title, function(err, weather) {
		let newComment = req.body.title;
		console.log(req.body.title);

		weather.comments.push(newComment);
		Weather.save();
		console.log(weather);
	});
	response.send("middle ware hit");
}

module.exports = {
	displayWeather: displayWeather,
	saveComments: saveComments
};
