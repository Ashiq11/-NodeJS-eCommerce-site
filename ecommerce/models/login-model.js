var db = require('./db');
module.exports = {
	verifyUser: function(user, callbackFromController){
		var sql = "SELECT * FROM users WHERE username=? AND usertype=? AND password=?";
		console.log(sql);	 
		db.execute(sql, [user.username, user.usertype, user.password], function (result){
			
			if(result.length >= 1)
			{
				callbackFromController(result);
			}
			else
			{
				callbackFromController(result);
			}
		});
		 
		//connection.end();
	}
};