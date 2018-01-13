const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port: 8080
    },
    module: {
        rules : [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test:/\.(s*)css$/, use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title : 'WebApp', filename: 'index.html', template: 'src/index.html'}),
        new ExtractTextPlugin({filename:'app.bundle.css'}),
        new webpack.HotModuleReplacementPlugin()
    ]
}