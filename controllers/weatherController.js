const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/shelters';
mongoose.connect(mongoDB, {
  useMongoClient: true
});