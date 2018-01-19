const path = require('path');

module.exports = {
  devtool: "eval-source-map",
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      containers: './containers'
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_module/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        //use: ['style-loader', 'css-loader', 'sass-loader']
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};