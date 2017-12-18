const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/shelters';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

let Comment = require('../models/comments');

function saveComment(req, response) {

	let newComment = req.query;
	console.log(req.query);
	comments.push(newComment);
	console.log(comments);
	newComment.save();
	console.log(comments);
	response.render("index", { comments });
}

module.exports = {
	saveComment: saveComment
};