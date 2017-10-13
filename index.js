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


app.listen(process.env.PORT || 5000);
