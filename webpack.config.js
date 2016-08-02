module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './public/',
    publicPath: './public'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};