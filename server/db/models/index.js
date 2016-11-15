const mongoose = require('mongoose');
require('./categories-sb.model');
const Category_sb = mongoose.model('Category_sb');

Category_sb.create({
	type: Category_sb.schema.path('type').enumValues[0],
	title: "budsho"
}, (err, docs) => {
	if(err) {
		return false
	};

	return docs;
});




require('./users.model');
require('./categories.model');

// sandbox