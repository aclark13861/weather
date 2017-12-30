const request = require('request');

let Weather = require("../models/weather");

function saveComments(req, response) {
	let weather = require('../models/weather');

	Weather.find(req.body, function(err, weather) {
		let newComment = req.body;
		console.log(req.title);
		weather.comments.push(newComment);
		console.log(weather.comments);
		weather.save();
		console.log(weather);
	});

	console.log(req.body);
}

module.exports = {
	saveComments: saveComments
};