const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/weather';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

let Weather = require("../seed.js");

function saveComments(req, response) {
	let weather = require('../models/weather');

	Weather.find({}, req.title, function(err, weather) {
		let newComment = req.title;
		console.log(req.body.title);
		weather.comments.push(newComment);
		console.log(weather.comments);
		weather.save();
		console.log(weather);
	});

	console.log(req.title);
	response.send(req.body);
}

module.exports = {
	saveComments: saveComments
};