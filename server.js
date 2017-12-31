//set up
var express = require('express');
var bodyParser = require('body-parser');
var flash = require('flash');
var session = require('express-session');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_sz82z631:f16s2jen6rmoltuqm5ntv4m66c@ds135747.mlab.com:35747/heroku_sz82z631');

var weather = require('./models/weather');

//Using express calling it app
var app = express();

//use public directory
app.use(express.static('public'));

//use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({secret: "weather"}));

//set viewsgit
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(flash());

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require(__dirname+'/config/routes');
app.use(routes);

function homeController(req, res) {
	console.log("controller hit");
	res.sendFile(__dirname + "/views/index.ejs");

}


//Get slash 
app.get('/', function homepage (req, res) {
 	res.render(__dirname + '/views/index.ejs');

 });

//post new comment
app.post('/commentGrabber', function(req, res) {
	new weather({
		comments: req.body.title
	}).save(function(err, doc) {
		if (err) res.json(err);
		else  res.send('Comment saved to db');
	});
});

//Port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('The best weather app you ever seen is listening at http://localhost:3000/');
});
