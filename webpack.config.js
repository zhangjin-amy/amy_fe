const path = require( 'path' );
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, './dist' ),
        filename: 'main.js',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "./dist")
      },
      port: 8080, // port number
      open: true, // open browser automatically
      hot: true, // enable hot module replacement
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            
        ]
    },
    plugins: [
      new HtmlPlugin({ 
        template: "./index.html" 
      }),
      new CleanWebpackPlugin(),
    ]
};