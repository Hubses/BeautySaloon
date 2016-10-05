var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/entry',
        vendor: './src/vendor'
    },
    output: {
        path: path.resolve("./build/"),
        filename: "[name].js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    resolveLoader: {
        modulesDirectories: [
            './node_modules'
        ]
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: 'tslint' }
        ],
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|ico)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader'
            }
        ],
        postLoaders: []
    },
    tslint: {
        emitErrors: false,
        failOnHint: false
    }
};