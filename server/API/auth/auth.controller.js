const _ = require('lodash');
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');

const signin = (req, res) => {

	const {email, password} = req.body;

	//get User by it's email
	User.findOne( {email}, (err, user) => {

		// db error
		if(err) {
			res.json({
				success: false,
				message: err
			})
			return;
		}

		// if no user found
		if(user === null) {
			res.json({
				success: false,
				message: 'no such user found'
			})
		} else { 

			// password is incorrect
			if(user.password !== password) {
				res.json({
					success: false,
					message: 'password is incorrect'
				})
			} else {

				const payload = {
					userName: user.userName
				};

				const secret = req.app.get('secret');

				const token = jwt.sign(payload, secret, {expiresIn: '1d'});

				res.json({
					success: true,
					token
				});
			}
		}
	} );

}

const register = (req, res) => {

	const {email} = req.body;

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
				message: 'such user already exists'
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
				success: true
			})

		})
	});

};

const users = (req, res) => {
	User.find({}, (err, users) => {
		if(err) {
			res.json({
				success: false,
				message: err
			});

			return;
		} 

		res.json({
			success: true,
			users
		});
	});
};

const validateToken = (req, res) => {
	if (req.body.token){
	    jwt.verify(req.body.token, req.app.get('secret'), function(err, decoded) {

	      if (err) {
	        return res.json({
	          success: false,
	          message: 'Failed to authenticate token.'
	        });
	      } else {
	        return res.json({ 
	          success: true,
	          // refreshed token
	          token: jwt.sign({
	            userName: decoded.userName
	          }, req.app.get('secret'), {expiresIn: '1d'})
	        });
	      }

	    });
	  } else {
	    return res.json({
	    	success: false,
          	message: 'No token provided'
	    })
	  }

}

module.exports = {
	signin,
	register,
	users,
	validateToken
};