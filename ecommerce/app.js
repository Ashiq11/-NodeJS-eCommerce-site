// require
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var path = require('path');

var login = require('./controllers/login');
var home = require('./controllers/home');
var about = require('./controllers/about');
var category = require('./controllers/category');
var specials = require('./controllers/specials');
var myaccount = require('./controllers/myaccount');
var register = require('./controllers/register');
var details = require('./controllers/details');
var contact = require('./controllers/contact');
var cart = require('./controllers/cart');
var newproduct = require('./controllers/new');
var products = require('./controllers/products');
var sell = require('./controllers/sell');


var port = process.env.PORT || 8080;
// configure
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'secret', resave: false, saveUninitialized:true}));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/category/', express.static(path.join(__dirname, 'public')));
app.use('/details/', express.static(path.join(__dirname, 'public')));
app.use('/product/edit/', express.static(path.join(__dirname, 'public')));
app.use('/product/delete/', express.static(path.join(__dirname, 'public')));

// routes
app.get('/hom', function(req, res, next){
	res.redirect('/home');
	next();
});

app.use(login);
app.use(home);
app.use(about);
app.use(category);
app.use(specials);
app.use(myaccount);
app.use(register);
app.use(details);
app.use(contact);
app.use(cart);
app.use(newproduct);
app.use(products);
app.use(sell);

// server
app.listen(port, function(){
	console.log('Server started at ' + port + ' port....');
});