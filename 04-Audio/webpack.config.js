const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 8080,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			favicon: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.([cm]?ts|tsx)$/,
				loader: 'ts-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]',
				},
			},
			{
				test: /\.mp3$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/sounds/[name][ext]',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		extensionAlias: {
			'.js': ['.js', '.ts'],
			'.cjs': ['.cjs', '.cts'],
			'.mjs': ['.mjs', '.mts'],
		},
	},
};
