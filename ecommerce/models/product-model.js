var db = require('./db');
module.exports = {
	getAll: function(callbackFromController) {
		var sql = "SELECT * FROM products";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	getAllhome: function(callbackFromController) {
		var sql = "SELECT * FROM products as p JOIN categories as c ON p.categoryid=c.categoryid ORDER BY p.unitsold DESC";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	getAllnew: function(callbackFromController){
		var sql = "SELECT * FROM products as p JOIN categories as c ON p.categoryid=c.categoryid ORDER BY p.productid DESC";
		db.execute(sql, null, function(result){
			callbackFromController(result);
		});
	},
	getAllproducts: function(callbackFromController){
		var sql = "SELECT * FROM products as p JOIN categories as c ON p.categoryid=c.categoryid";
		db.execute(sql, null, function(result){
			callbackFromController(result);
		});
	},
	getByid: function(id, callbackFromController){
		var sql = "SELECT * FROM products as p JOIN categories as c ON p.categoryid=c.categoryid WHERE productid=?";
		db.execute(sql, [id], function(result){
			callbackFromController(result);
		});
	},
	insert: function(user, callbackFromController){
		var sql = "INSERT INTO users VALUES (null, ?, ?)";
		db.execute(sql, [user.username, user.password], function(result){
			callbackFromController(result);
		});
	},
	sale: function(product, callbackFromController){
		var sql = "UPDATE products SET stock = stock - 1, unitsold = unitsold + 1 WHERE productid=?";
		db.execute(sql, [product.productid], function(result){
			callbackFromController(result);
		});
	},
	update: function(product, callbackFromController) {
		var sql = "UPDATE products SET productname=?, categoryid=?, companyname=?, price=?, discount=?, special=?, productdetails=?, stock=?, source=? WHERE productid=?";
		db.execute(sql, [product.productname, product.categoryid, product.companyname, product.price, product.discount, product.special, product.productdetails, product.stock, product.source, product.productid], function(result){
			callbackFromController(result);
		});
	},
	delete: function(productid, callbackFromController) {
		var sql = "delete from products WHERE productid=?";
		db.execute(sql, [productid], function(result){
			callbackFromController(result);
		});
	}
};