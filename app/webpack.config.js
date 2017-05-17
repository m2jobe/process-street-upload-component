const webpack = require('webpack');
const path = require('path');

var entries = [
	'./js/angular-app.js',
	'./js/app.controller.js',
	'./js/process-street-upload-wistia.js'
]

const config = {
  entry: entries,
 	output: {
 		path: path.resolve(__dirname, 'bin'),
 		filename: 'app.bundle.js'
 	},
	module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;
