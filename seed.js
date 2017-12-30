const request = require('request');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weather');


let Weather = require('./models/weather');

function displayWeather(token) {
	
	let options = {
		url: "http://api.wunderground.com/api/e1d4afd4ba6ea0d5/conditions/q/CO/Denver.json",
		headers: {Authorization: "Bearer " + token}
	};
	request(options, function(err, res ,body) {
		if(err) {console.log("ERROR: " + err);}
		let bod = JSON.parse(body);
		let weather = bod.current_observation;
		console.log(weather);
		
		Weather.remove({}, function(err) {
  			if (err) {
    			console.log("ERROR:", err);
  			}
		});

		Weather.create(weather, function(err, docs) {
	  		if (err) {
	    		console.log("ERROR:", err);
	  		} else {
	    		console.log("Created:", docs);
	   		 	mongoose.connection.close();
	 		 }
			});
		console.log("creating db");
	});
}

function getToken() {
	request.post({
			url: "https://api.yelp.com/oauth2/token",
			form: {
				client_id: process.env.KEY_ID,
				client_secret: process.env.KEY_SECRET,
				grant_type: "client_credentials"
			}
		}, function(err, httpRespone, body) {
			body = JSON.parse(body);
			token = body.access_token;
			displayWeather(token);
			
		});
}

getToken();

module.exports = Weather;