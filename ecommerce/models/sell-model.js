var db = require('./db');
module.exports = {
	getAll: function(callbackFromController) {
		var sql = "SELECT * FROM users, records, products, categories where users.userid=records.userid AND records.productid=products.productid AND categories.categoryid=products.categoryid ORDER BY unitsold DESC";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	}
};