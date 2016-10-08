const app = require('./server');
const port = 6590;

app.get('/', function(req, res) {
	res.send("ololoha!");
});

app.listen(port, 'localhost', function() {
	console.log('app is served on port : ' + port);
});