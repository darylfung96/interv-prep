var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (app) => {
	app.post('/dashboard/add/submit', async (req, res) => {
		const { company, position, research, question, notes, _id } = req.body;
		const currentUser = await User.findOne({ _id });
		if (currentUser) {
			// if there is no collections, we initialize it
			if(currentUser.collections === undefined) {
				currentUser.collections = {};
			}
			// if the current company doesn't exist, we initialize them
			if (currentUser.collections[company] === undefined) {
				currentUser.collections[company] = [];
			}
			// create copy of collections
			const newCollections = { ...currentUser.collections };
			// add the new collection
			newCollections[company] = [...newCollections[company], [position, research, question, notes]];
			currentUser.collections = newCollections;
			currentUser.save();
		} else {
			res.send('fail');
		}
		res.send('success');
	});


	app.post('/dashboard/edit/add/research', async (req, res) => {
		
	});
};
