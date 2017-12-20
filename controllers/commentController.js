const request = require('request');

let Weather = require("../models/weather");



function saveComments(req, response) {
	// console.log(req.body.comment);
	Weather.find(req.body, function(err, weather) {
		
		let newComment = req.body;
		console.log(req.body);
		weather.comments.push(newComment);
		console.log(weather.comments);
		weather.save();
		console.log(weather);
	});

	response.send("Middle ware hit");
	console.log(req.params);
}

module.exports= {
	saveComments: saveComments
};