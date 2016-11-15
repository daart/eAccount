const Category_sb = require('mongoose').model('Category_sb');

const getAll = (req, res) => {
	Category_sb.find({}, (err, docs) => {
		if(err) {
			res.send('Failure');
			return;
		}

		res.json({
			success: true,
			docs
		});
	});
};

module.exports = {
	getAll
};