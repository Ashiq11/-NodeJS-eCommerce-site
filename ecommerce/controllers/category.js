var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');

router.get('/category/:id', function(req, res){
	var id = req.params.id;
	productModel.getAllproducts(function(result){
		var flags = [], categories = [], l = result.length, i;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	flags[result[i].categoryid] = true;
		    	categories.push(result[i].categoryname);
			}
		}
		var products = [], promotion = [];
		for(i=0; i<l; i++){
			if(result[i].categoryname == id){
				products.push(result[i]);
			}
			if(result[i].discount){
				promotion.push(result[i]);
			}
		}
		if(!req.session.user){
			res.render('home/category', {products: products, categories: categories, category: id, promotion: promotion});
		}
		else{
			res.render('customer/category', {products: products, categories: categories, category: id, promotion: promotion});
		}
		
	});
});

module.exports = router;