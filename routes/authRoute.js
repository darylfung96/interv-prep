var passport = require('passport');

module.exports = (app) => {
	app.get('/', (req, res) => {
	res.send('hello');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

//google authentication
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email'],
	}));

	app.get('/auth/google/callback', passport.authenticate('google', {
		successRedirect: '/',
		failedRedirect: '/fail',
	}));


//facebook authentication
	app.get('/auth/facebook', passport.authenticate('facebook'));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/',
		failedRedirect: '/fail',
	}));
}
