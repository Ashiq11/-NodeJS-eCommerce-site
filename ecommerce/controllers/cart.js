var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');
var recordModel = require.main.require('./models/record-model');

router.get('/cart', function(req, res){
	var cart = req.session.cart || [];
	var id = req.params.id;
	productModel.getAllhome(function(result){
		var flags = [], categories = [], l = result.length, i, product;
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

		var total = 0;
		for(i=0; i<cart.length; i++){
			total=total+cart[i].price-((cart[i].price*cart[i].discount)/100);
		}
		if(!req.session.user){
			res.render('home/cart', {cart: cart, total: total, categories: categories, promotion: promotion});
		}
		else{
			res.render('customer/cart', {cart: cart, total: total, categories: categories, promotion: promotion});
		}
	});
});

router.get('/checkout', function(req, res){
	if(!req.session.user){
		res.redirect("myaccount");
	}
	else{
		console.log(req.session.user.userid);
		var cart = req.session.cart || [];
		delete req.session.cart;
		for(var i=0; i<cart.length; i++){
			var record = {userid: req.session.user.userid, productid: cart[i].productid, sellingprice: cart[i].price-((cart[i].price*cart[i].discount)/100), status: "purchased"};
			productModel.sale(cart[i], function(result){});
			recordModel.insert(record, function(result){});
		}
		res.redirect("/home");
	}
});

module.exports = router;