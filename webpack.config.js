const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    hot: true, // Enable webpack's Hot Module Replacement feature:
    open: true,
    compress: true, // Enable gzip compression for everything served:
    port: 3000,
    historyApiFallback: true // TODO
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // loads sass
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack + EJS',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html')
    })
  ]
}
