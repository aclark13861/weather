var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	comment: String,
	author: String
});

module.exports = mongoose.model('Comment', Comment);