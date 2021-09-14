const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/App.js',
    utils: './src/scripts/utils.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 2200
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }
}