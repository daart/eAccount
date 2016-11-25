const Category_sb = require('mongoose').model('Category_sb');

const getAll = (req, res) => {
	Category_sb.find({}, (err, categories) => {
		if(err) {
			res.send('Failure');
			return;
		}

		res.json({
			success: true,
			categories,
			types: Category_sb.schema.path('type').enumValues
		});
	});
};

const create = (req, res) => {
	Category_sb.create(req.body, (err, category) => {
		if(err) {
			res.json({
				success: false,
				err
			});
			return;
		}

		res.json({
			success: true,
			category
		});

	});
}

const remove = (req, res) => {
	Category_sb.findByIdAndRemove(req.params.id, (err, removed) => {
		if(err){
			res.json({
				success: false,
				err
			});
			return;
		}
		
		res.json({
			success: true,
			removed
		});
	});
};

module.exports = {
	getAll,
	create,
	remove
};