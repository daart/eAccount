const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryTypes = ['Income', 'Expenses'];

let categorySchema = new Schema({
	type: {type: String, required: true, enum: categoryTypes},
	title: {type: String, required: true},
	active: {type: Boolean, required: true},
	parent: {type: Schema.Types.ObjectId, default: null}
}, {collection: 'categories'});

mongoose.model('Category', categorySchema);