var express = require('express');
var router = express.Router();
var sellModel = require.main.require('./models/sell-model');
//var userModel = require.main.require('./models/user-model');

router.get('/sell', function(req, res){
	
	sellModel.getAll(function(result){
		console.log(result);
		res.render('admin/sellproducts', { records:result });
	});
});

module.exports = router;