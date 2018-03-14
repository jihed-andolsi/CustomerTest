var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app/app.module.ts'],
    },
    output: {
        pathinfo: true,
        filename: 'bundle.js',
        path: path.resolve('./build')
    },

    resolve: {
        // add '.ts' as resolvable extensions
        extensions: ['.js', '.ts']
        //root: __dirname + '/src/',
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/assets', to:'./assets', force: true},
            { from: './src/app/*/*.html', to: './views', force: true }
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
          ]
    }
}