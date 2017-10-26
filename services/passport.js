var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
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
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ googleID: profile.id });
		if(existingUser) {
			return done(null, existingUser);
		}
		const user = await new User({ googleID: profile.id }).save((err) => {
			console.log(err);
		});
		done(null, user);
	}
));

passport.use(
	new FacebookStrategy({
		clientID: keys.FACEBOOK_CLIENT_ID,
		clientSecret: keys.FACEBOOK_CLIENT_SECRET,
		callbackURL: '/auth/facebook/callback',
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ facebookID: profile.id });
		if (existingUser) {
			return done(null, existingUser);
		}
		const user = await new User({ facebookID: profile.id }).save((err) => {
			console.log(err);
		});
		done(null, user);
	}
	)
);
