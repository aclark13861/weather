//set up
var express = require('express');
var bodyParser = require('body-parser');
var flash = require('flash');
var session = require('express-session');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weather');



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

app.use(express.static(__dirname + '/public'))

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

app.post('/commentGrabber', function(req, res) {
	mongoose.then(function(db) {
		db.collection('comments').insertOne(req.body);
	});
	res.send('Data received:\n' + JSON.stringify(req.body));
});

//Get slash boy
app.get('/', function homepage (req, res) {
 	res.render(__dirname + '/views/index.ejs');

 });

//Port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('The best weather app you ever seen is listening at http://localhost:3000/');
});
