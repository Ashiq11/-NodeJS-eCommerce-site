var db = require('./db');
module.exports = {
	getAll: function(callbackFromController) {
		var sql = "SELECT * FROM products";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	get: function(id, callbackFromController){
		var sql = "SELECT * FROM users WHERE userId=?";
		db.execute(sql, [id], function(result){
			callbackFromController(result[0]);
		});
	},
	insert: function(user, callbackFromController){
		var sql = "INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [user.username, user.usertype, user.password, user.name, user.contact, user.email, user.address], function(result){
			callbackFromController(result);
		});
	},
	update: function(user, callbackFromController) {
		var sql = "UPDATE users SET username=?, usertype=?, password=?, name=?, contact=?, email=?, address=? WHERE userid=?";
		db.execute(sql, [user.username, user.usertype, user.password, user.name, user.contact, user.email, user.address, user.userid], function(result){
			callbackFromController(result);
		});
	}
};