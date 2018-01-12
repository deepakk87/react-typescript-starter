const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    module: {
        rules : [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']}
        ]
    },
    plugins: [new HtmlWebpackPlugin({title : 'WebApp', filename: 'index.html', template: 'src/index.html'})]
}