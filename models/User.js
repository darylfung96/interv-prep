var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	googleID: String,
	facebookID: String,
});

mongoose.model('User', UserSchema);
