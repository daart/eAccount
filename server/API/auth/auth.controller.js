const _ = require('lodash');

const fakeUsers = [
{
	userName: 'puzzzkarapuz',
	password: 'qwerty'
},
{
	userName: 'admin',
	password: 'asgard'
}
];

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