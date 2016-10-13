const _ = require('lodash');
const User = require('mongoose').model('User');

module.exports.signin = (req, res) => {
	let {userName, password} = req.body;

	let user = _.find(fakeUsers, {userName});

	if(!user) {
		res.json({
			success: false,
			message: 'no such user found'
		})
	} else {
		if(user.password !== password) {
			res.json({
				success: false,
				message: 'password is incorrect'
			})
		} else {
			res.json({
				success: true
			});
		}
	}

}

module.exports.register = (req, res) => {

	let {email} = req.body;

	User.findOne( {email}, (err, user) => {

		if(err) {
			res.json({
				success: false,
				message: err
			})
			return;
		}

		if(user !== null) {
			res.json({
				success: false,
				message: 'such user already exists '
			})
			return;
		} 

		User.create(req.body, (err, createdUser) => {

			if(err) {
				res.json({
					success: false,
					message: err
				})
				return;
			}

			res.json({
				success: true,
				createdUser
			})

		})
	});

}