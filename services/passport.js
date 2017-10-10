var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('../config/keys');
var mongoose = require('mongoose');
var User = mongoose.model('User');


passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy({
		clientID: keys.CLIENT_ID,
		clientSecret: keys.CLIENT_SECRET,
		callbackURL: '/auth/google/callback',
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ googleID: profile.id });
		if(existingUser) {
			return done(null, existingUser);
		}
		const user = await new User.create({ googleID: profile.id}).save();
		done(null, user);
	}
));
