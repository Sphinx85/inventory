const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        https: true,
        contentBase: './dist',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
