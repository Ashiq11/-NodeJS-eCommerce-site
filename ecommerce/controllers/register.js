var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');
var userModel = require.main.require('./models/user-model');

router.get('/register', function(req, res){
	
	productModel.getAllhome(function(result){
		var flags = [], categories = [], l = result.length, i;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	flags[result[i].categoryid] = true;
		    	categories.push(result[i].categoryname);
			}
		}
		var promotion = [];
		for(i=0; i<l; i++){
			if(result[i].discount){
				promotion.push(result[i]);
			}
		}
		if(!req.session.user){
			res.render('home/register', {products: result, promotion: promotion, categories: categories});
		}
		else if(req.session.user.usertype=="customer"){
			res.render('customer/register', {user: req.session.user, products: result, promotion: promotion, categories: categories});
		}
		else if(req.session.user.usertype=="admin"){
			res.render('admin/register', {user: req.session.user});
		}
		
	});

	
});

router.post('/register', function(req, res){

	var user = {username: req.body.username,
				password: req.body.password,
				usertype: "customer",
				name: req.body.name,
				contact: req.body.contact,
				email: req.body.email,
				address: req.body.address
	}

	if(!req.session.user){
		userModel.insert(user, function(result){
			res.redirect("myaccount");
		});
	}
	else if(req.session.user.usertype=="customer"){
		user.userid = req.session.user.userid;
		req.session.user = user;
		userModel.update(user, function(){
			res.redirect("profile");
		})
	}
	else if(req.session.user.usertype=="admin"){
		user.userid = req.session.user.userid;
		user.usertype = "admin";
		req.session.user = user;
		userModel.update(user, function(){
			res.redirect("profile");
		})
	}
});

router.get('/profile', function(req, res){
	
	productModel.getAllhome(function(result){
		var flags = [], categories = [], l = result.length, i;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	flags[result[i].categoryid] = true;
		    	categories.push(result[i].categoryname);
			}
		}
		var promotion = [];
		for(i=0; i<l; i++){
			if(result[i].discount){
				promotion.push(result[i]);
			}
		}
		if(!req.session.user){
			res.redirect("/home");
		}
		else if (req.session.user.usertype=="customer"){
			res.render('customer/profile', {user: req.session.user, products: result, promotion: promotion, categories: categories});
		}
		else if (req.session.user.usertype=="admin"){
			res.render('admin/profile', {user: req.session.user});
		}
	});

	
});

module.exports = router;