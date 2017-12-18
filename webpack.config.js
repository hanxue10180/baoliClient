var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./path.js');
module.exports = {
  entry: {
	  main : path.resolve(__dirname,'./src/main.js')
  },
  output: {
    path: path.resolve(base.path),
    publicPath: './../',
    filename: 'js/[name].js'
  },
  plugins: [
      new ExtractTextPlugin({
          filename: 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
          filename: 'html/index.html',
          template: './index.html',
          inject: true,
          chunks: ['main']
      }),
      new webpack.DllReferencePlugin({
          manifest: require(base.path + '/vendor-manifest.json')
      })
  ],
  module: {
    rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					less: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!less-loader' }),
					css: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' })
				}
			}
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: 'imgs/[name].[hash:7].[ext]'
			}
		},
		{
			test: /\.(svg|ttf|eot|woff|woff2)$/,
			loader: 'file-loader',
			options: {
				name: 'fonts/[name].[ext]'
			}
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
		},
		{
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    port: 8083,
	  historyApiFallback: true,
	  noInfo: true,
	  contentBase: './src/module/index/index.html'
  },
  performance: {
    hints: false
  },
  devtool: false
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
