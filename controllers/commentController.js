const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://heroku_sz82z631:f16s2jen6rmoltuqm5ntv4m66c@ds135747.mlab.com:35747/heroku_sz82z631';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

let Weather = require("../models/weather");

function saveComments(req, response) {
	var myData = req.body.comment;

	Weather.find({}, function(err, docs) {
		console.log(docs[0]);
		console.log(docs[0].comments);
		console.log(docs[0].weather);
		docs[0].comments.push(myData);
		docs[0].save();
		console.log(docs[0].comments);
		console.log(docs);
		
	});
	response.send('middle ware hit');

}

module.exports = {
	saveComments: saveComments
};