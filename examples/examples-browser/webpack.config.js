const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  plugins: [
    new HtmlWebpackPlugin({
        template: './views/webcamFaceLandmarkDetection.html'
    })
    
  ],

};
