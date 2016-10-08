var path = require('path');

module.exports = {
	entry: path.resolve( __dirname + '/src' ),

	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'app.bundle.js',
		publicPath: '/static/'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	},

	devServer : {
		port: 6690,
		contentBase: path.resolve(__dirname + '/src')
	}

}