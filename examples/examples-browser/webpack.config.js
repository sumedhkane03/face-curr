//The webpack.config.js file is used to configure webpack when bundling the application.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './server.js', //The entry point for the application.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //The name of the bundle that will be created.
    },
    module: {
        rules: [
            {
                test: /\.js$/, //The regular expression that matches the files that will be processed by the loader.
                exclude: /node_modules/, //The files that will be excluded from being processed by the loader.
                use: {
                    loader: 'babel-loader' //The name of the loader that will be used to process the files.
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './views/webcamFaceLandmarkDetection.html' //The path to the HTML file that will be used as a template.
        })
    ]
};
