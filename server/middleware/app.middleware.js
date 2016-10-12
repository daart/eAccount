const bodyParser = require('body-parser');
const cors = require('cors');
const override = require('method-override');

module.exports = (app) => {
	app.use( bodyParser.urlencoded({ extended: true }) );
	app.use( bodyParser.json() );

	app.use( cors() );

	app.use( override() );
}