const request = require('request');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather');

function displayShelters(token) {
	
	let options = {
		url: "http://api.wunderground.com/api/e1d4afd4ba6ea0d5/conditions/q/CO/Denver.json",
		headers: {Authorization: "Bearer " + token}
	};
	request(options, function(err, res ,body) {
		if(err) {console.log("ERROR: " + err);}
		let bod = JSON.parse(body);
		let weather = bod.businesses;
		console.log("");
		for (i = 0; i < weather.length; i++) {
			console.log(weather[i]);
		}
		
		Weather.remove({}, function(err) {
  			if (err) {
    			console.log("ERROR:", err);
  			}
		});

		Weather.create(shelters, function(err, docs) {
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