const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, require: true},
	email: {type: String, require: true},
	password: {type: String, require: true}
},{collection: 'users'});

mongoose.model('User', userSchema);