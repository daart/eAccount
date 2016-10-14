require('./models');

const {userName, dbpassword} = require('./credentials/db.credentials');

module.exports = {
	url: `mongodb://${userName}:${dbpassword}@ds061288.mlab.com:61288/_eaccount_users`
};