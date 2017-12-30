var express = require('express');
var router = express.Router();

var session = require('express-session');
var weatherController = require('../controllers/weatherController');
var staticController = require('../controllers/static');


router.route('/')
	.get(weatherController.displayWeather);
	

router.route('/commentGrabber')
	.get(weatherController.saveComments);

	//.put(commentController.saveComments);		


module.exports = router;
