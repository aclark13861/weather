var express = require('express');
var router = express.Router();

var session = require('express-session');
var weatherController = require('../controllers/weatherController');
var staticController = require('../controllers/static');
var commentController = require('../controllers/commentController');


router.route('/')
	.get(weatherController.displayWeather);

router.route('/comments')
	.post(weatherController.saveComments);	
			


module.exports = router;
