//set up
var express = require('express');
var bodyParser = require('body-parser');
var flash = require('flash');
var session = require('express-session');

//Using express calling it app
var app = express();

//use public directory
app.use(express.static('public'));

//use body parser
app.use(bodyParser.urlencoded({ extended: true }));

//set views
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(flash());

//Port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('The best weather app you ever seen is listening at http://localhost:3000/');
});
