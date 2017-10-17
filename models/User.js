var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	googleID: { type: String, unique: true },
	facebookID: { type: String, unique: true },
	collections: {}
});

mongoose.model('User', UserSchema);
