var express = require('express');
var router = express.Router();

var session = require('express-session');
var weatherController = require('../controllers/weatherController');
var staticController = require('../controllers/static');
var comments = require('../controllers/commentController');

router.route('/')
	.get(weatherController.displayWeather);

router.route('/commentGrabber/:id')
	.post(comments.saveComments);		


module.exports = router;
