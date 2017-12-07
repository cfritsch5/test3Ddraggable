var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'head',
});
module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname + "/build",
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  output: {
    filename: 'bundle.js',
    path:__dirname +'/build',
  },
  plugins: [HTMLWebpackPluginConfig],
};
