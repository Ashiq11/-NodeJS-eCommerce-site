var express = require('express');
var router = express.Router();

var loginModel = require.main.require('./models/login-model');

router.get('/adminportal', function (req, res){
	res.render('admin/loginview', {message: ''});
});

router.post('/adminportal', function (req, res){
	var user = {
		username: req.body.username,
		usertype: "admin",
		password: req.body.password
	};
	loginModel.verifyUser(user, function(result){
		if(result.length)
		{
			console.log("valid");
			req.session.user = result[0];
			res.redirect('/profile');
		}
		else
		{
			console.log("invalid");
			res.render('admin/loginview', {message: 'Invalid username or password'});
		}
	});

});

router.post('/login', function (req, res){
	var user = {
		username: req.body.username,
		usertype: "customer",
		password: req.body.password
	};
	loginModel.verifyUser(user, function(valid){
		if(valid)
		{
			req.session.loggedUser = user;
			res.redirect('/home');
		}
		else
		{
			res.render('login/loginview', {message: 'Invalid username or password'});
		}
	});

});

module.exports = router;