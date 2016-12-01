const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryTypes = [
	"Income",
	"Expenses"
];

const Category_sb_Schema = new Schema({
	type: {type: String, enum: CategoryTypes},
	title: {type: String, required: true},
	isActive: {type: Boolean, default: true},
	parentId: {type: Schema.Types.ObjectId, default: null}
}, {collection : 'cateories_sb'});

mongoose.model('Category_sb', Category_sb_Schema);