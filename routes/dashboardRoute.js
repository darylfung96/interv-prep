module.exports = (app) => {
	app.post('/dashboard/add/submit', (req, res) => {
		console.log(req.body);
		//TODO send and update the database
	});
};
