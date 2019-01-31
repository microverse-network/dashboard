const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['babel-polyfill', './src/client'],
  output: {
    path: path.resolve(__dirname, '.build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: require.resolve('css-loader'),
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: true,
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [new ExtractTextPlugin({ filename: 'style.css' })],
  node: {
    dgram: 'empty',
    net: 'empty',
    fs: 'empty',
  },
}
