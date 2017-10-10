var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	googleID: 'string',
});

var User = mongoose.model('User', UserSchema);
