var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'app.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  proxy: {
    '/api/*' : 'https://0.0.0.0:8081/',
  },
  devtool : 'source-map',
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
          {
              test: /\.scss$/,
              loaders: [ 'style', 'css', 'sass' ]
          },
          { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          {
            test: /\.less$/,
            loaders: ['style','css','less']
          },
          {
            test: /\.css$/,
            loaders: ['style','css']
          },
          { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      ]
  }
};
