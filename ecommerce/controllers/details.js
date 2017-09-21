var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');

router.get('/order/:id', function(req, res){
	productModel.getAllhome(function(result){
		var cart = req.session.cart || [];
		for(var i=0; i<result.length; i++){
			if(result[i].productid==req.params.id){
				cart.push(result[i]);
			}
		}
		req.session.cart = cart;
		res.redirect("/cart");
	});
});

router.get('/details/:id', function(req, res){
	var id = req.params.id;
	productModel.getAllhome(function(result){
		var flags = [], categories = [], l = result.length, i, product;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	flags[result[i].categoryid] = true;
		    	categories.push(result[i].categoryname);
			}
			if(result[i].productid==id){
				product = result[i];
			}
		}
		
		var products = [], promotion = [];
		for(i=0; i<l; i++){
			if(result[i].categoryname == product.categoryname && result[i].productid!=id){
				products.push(result[i]);
			}
			if(result[i].discount){
				promotion.push(result[i]);
			}
		}
		if(!req.session.user){
			res.render('home/details', {products: products, categories: categories, product: product, promotion: promotion});
		}
		else{
			res.render('customer/details', {products: products, categories: categories, product: product, promotion: promotion});
		}
		
	});
});

router.get('/details', function(req, res){
	userModel.getAll(function(result){
		res.render('home/details', {
			productList: result
		});
	});
});

module.exports = router;