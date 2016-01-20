var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: ['./src/index']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, '../src'),
            }
        ],
    },
    plugins: []
};
