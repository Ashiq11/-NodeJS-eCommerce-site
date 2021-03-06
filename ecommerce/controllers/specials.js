var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');

router.get('/specials', function(req, res){
	
	productModel.getAllhome(function(result){
		var flags = [], categories = [], l = result.length, i;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	flags[result[i].categoryid] = true;
		    	categories.push(result[i].categoryname);
			}
		}
		var promotion = [], special = [];
		for(i=0; i<l; i++){
			if(result[i].discount){
				promotion.push(result[i]);
			}
			if(result[i].special){
				special.push(result[i]);
			}
		}
		if(!req.session.user){
			res.render('home/specials', {products: special, promotion: promotion, categories: categories});
		}
		else{
			res.render('customer/specials', {products: special, promotion: promotion, categories: categories});
		}
		
	});

	
});

module.exports = router;