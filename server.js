//set up
var express = require('express');
var bodyParser = require('body-parser');
var flash = require('flash');
var session = require('express-session');
const path = require('path');

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

//Get slash boy
app.get('/', function homepage (req, res) {
 	res.render(__dirname + '/views/index.ejs');

 });

//Port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('The best weather app you ever seen is listening at http://localhost:3000/');
});
