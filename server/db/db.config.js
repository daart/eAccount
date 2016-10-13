require('./models');

const {userName, dbpassword} = require('./credentials/db.credentials');
console.log(userName, dbpassword);

module.exports = {
	url: `mongodb://${userName}:${dbpassword}@ds061288.mlab.com:61288/_eaccount_users`
};