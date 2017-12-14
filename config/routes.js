var express = require('express');
var router = express.Router();

var passport = require('passport');
var session = require('express-session');
var weatherController = require('../controllers/weatherController');
var staticController = require('../controllers/statics');

router.route('/')
	.get(static.index)
	.get(weatherController.displayWeather);


module.exports = router;
