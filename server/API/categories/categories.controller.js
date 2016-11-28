const Category = require('mongoose').model('Category');

const create = (req, res) => {
	Category.create(req.body, (err, newCategory) => {
		if(err){
			res.json({
				success: false,
				message: err
			})

			return;
		};

		res.json({
			success: true,
			newCategory
		})
	});
};

const getAll = (req, res) => {
	Category.find({}, (err, categories) => {
		if(err) {
			res.json({
				success: false,
				message: err
			});

			return;
		}

		res.json({
			success: true,
			categories,
			types: Category.schema.path('type').enumValues
		})
	});
};

const getOne = (req, res) => {
	Category.findById(req.params.id, (err, category) => {
		if (err) {
			return res.json({
				success: false,
				err
			})
		}

		res.json({
			success: true,
			category
		})
	})
}

const updateOne = (req, res) => {
	Category.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, category) => {
		if (err) {
			return res.json({
				success: false,
				err
			})
		}

		res.json({
			success: true,
			category
		})
	})
}

const remove = (req, res) => {
	Category.findByIdAndRemove(req.params.id, (err, removed) => {
		if(err) {
			return res.json({
				success: false,
				err
			});
		}

		return res.json({
			success: true
		})
	}) 
};

module.exports = {
	getAll,
	create,
	getOne,
	updateOne,
	remove
};