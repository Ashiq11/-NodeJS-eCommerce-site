var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');
var loginModel = require.main.require('./models/login-model');

router.get('/myaccount', function(req, res){
	
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
			res.render('home/myaccount', {products: result, promotion: promotion, categories: categories});
		}
		else if(req.session.user.usertype=="customer"){
			delete req.session.user;
			res.redirect("/home");
		}
		else if(req.session.user.usertype=="admin"){
			delete req.session.user;
			res.redirect("/adminportal");
		}
		
	});

	
});

router.post('/myaccount', function(req, res){

	var user = {
		username: req.body.username,
		usertype: "customer",
		password: req.body.password
	};
	loginModel.verifyUser(user, function(result){
		if(result.length)
		{
			req.session.user = result[0];
			res.redirect('/home');
		}
		else
		{
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
				res.render('home/myaccount', {products: result, promotion: promotion, categories: categories});
			});
		}
	});
});

module.exports = router;