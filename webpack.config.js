const path = require('path');
const webpack = require('webpack');

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
      { test: /\.js$/, exclude: /node_module/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.js$/, exclude: /node_module/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        //use: ['style-loader', 'css-loader', 'sass-loader']
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};