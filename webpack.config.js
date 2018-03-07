// require --------------------------------------------------------------------

var path            = require("path");
var webpack         = require("webpack");
var minifyPlugin    = require("babel-minify-webpack-plugin");

// exports --------------------------------------------------------------------

module.exports = {

    // entry ------------------------------------------------------------------

    entry: [
        "babel-polyfill",
        "./app/scripts/app.js"
    ],

    // output -----------------------------------------------------------------

    output: {
        path: path.resolve(__dirname, 'app/builds'),
        filename: "app.js",
        umdNamedDefine: true
    },

    // plugins ---------------------------------------------------------------

    plugins: [
        new minifyPlugin()
    ],

    // module -----------------------------------------------------------------

    module: {     
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader'
            },    
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            },                   
            {
                test: /\.js$/,
            	exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    }
}


