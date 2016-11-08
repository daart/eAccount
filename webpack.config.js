var path = require('path');

module.exports = {
	entry: path.resolve( __dirname + '/src' ),

	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'app.bundle.js',
		publicPath: '/static/'
	},

	devtool: 'source-map',

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
			},
	      	{
				test: /\.s?css$/,
				loader: 'style!css!sass'
			},
			{
				test   : /\.woff/,
				loader : require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
			},
			{
				test   : /\.ttf/,
				loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
			},
			{
				test   : /\.eot/,
				loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
			},
			{
				test   : /\.svg/,
				loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
			}
		]
	},

	devServer : {
		port: 6690,
		contentBase: path.resolve(__dirname + '/src')
	}

}