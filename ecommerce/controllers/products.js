var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');

router.use('*', function(req, res, next){
	if(! req.session.user)
	{
		res.redirect('/adminportal');
		return;
	}
	next();
});

router.get('/product', function(req, res){
	
	productModel.getAllhome(function(result){
		
		res.render('admin/products', {products: result});
	});

	
});

router.get('/product/edit/:id', function(req, res){
	productModel.getAllhome(function(result){
		
		var flags = [], categories = [], l = result.length, i, product;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	var category = {categoryid: result[i].categoryid, categoryname: result[i].categoryname};
		    	flags[result[i].categoryid] = true;
		    	categories.push(category);
			}
			if(result[i].productid==req.params.id){
				product = result[i];
			}
		}
		res.render('admin/editproducts', {product: product, categories: categories});
	});

	
});

router.post('/product/edit/:id', function(req, res){

	var product = {productid: req.body.productid,
					productname: req.body.productname,
					categoryid: req.body.category,
					companyname: req.body.companyname,
					price: req.body.price,
					discount: req.body.discount,
					special: req.body.special,
					productdetails: req.body.productdetails,
					stock: req.body.stock,
					source: req.body.source
	};
	console.log(product);


	productModel.update(product, function(result){
		console.log(result);
		res.redirect("/product");
	});
});

router.get('/product/delete/:id', function(req, res){
	productModel.getAllhome(function(result){
		
		var flags = [], categories = [], l = result.length, i, product;
		for( i=0; i<l; i++) {
		    if(! flags[result[i].categoryid]){
		    	var category = {categoryid: result[i].categoryid, categoryname: result[i].categoryname};
		    	flags[result[i].categoryid] = true;
		    	categories.push(category);
			}
			if(result[i].productid==req.params.id){
				product = result[i];
			}
		}
		res.render('admin/deleteproducts', {product: product, categories: categories});
	});

	
});

router.post('/product/delete/:id', function(req, res){

	var productid = req.body.productid;
					


	productModel.delete(productid, function(result){
		res.redirect("/product");
	});
});

module.exports = router;