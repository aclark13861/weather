var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeatherSchema = new Schema({
	current_observation: {
		image: {
			url: String,
			title: String,
			link: String
		}
	},
	display_location: {
		full: String,
		elevation: String
	},
	weather: String,
	temperature_string: String,
	relative_humidity: String,
	wind_mph: String,
	icon: String,
	comments: [String]
});

module.exports = mongoose.model('Weather', WeatherSchema);