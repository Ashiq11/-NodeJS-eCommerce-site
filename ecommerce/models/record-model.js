var db = require('./db');
module.exports = {
	getAll: function(callbackFromController) {
		var sql = "SELECT * FROM products";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	insert: function(record, callbackFromController){
		var sql = "INSERT INTO records VALUES (null, ?, ?, ?, ?)";
		db.execute(sql, [record.userid, record.productid, record.sellingprice, record.status], function(result){
			callbackFromController(result);
		});
	},
	update: function(user, callbackFromController) {
		var sql = "UPDATE users SET username=?, password=? WHERE userId=?";
		db.execute(sql, [user.username, user.password, user.userId], function(result){
			callbackFromController(result);
		});
	}
};