var mongoose = require('mongoose');
var mongoDB = 'mongodb://heroku_sz82z631:f16s2jen6rmoltuqm5ntv4m66c@ds135747.mlab.com:35747/heroku_sz82z631';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

var Schema = mongoose.Schema;

var Weather = new Schema({
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

module.exports = mongoose.model('Weather', Weather);