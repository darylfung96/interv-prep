var express = require('express');
var app = express();
var passport = require('passport');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var keys = require('./config/keys');

mongoose.connect(keys.MONGO_URI);
require('./models/User');
require('./services/passport');


app.use(cookieSession({
	maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
	keys: [keys.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);

const path = require('path');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


app.listen(process.env.PORT || 5000);
