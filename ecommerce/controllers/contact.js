var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/contact', function(req, res){
	userModel.getAll(function(result){
		res.render('home/contact', {
			productList: result
		});
	});
});

module.exports = router;