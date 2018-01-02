// ------------------------------------------------------------------ Default
// Dependencies
// ------------------------------------------------------------------

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  pluginsDev,
  hotLoader,
  sassLoaderDev
} = require('./webpack.config.dev');
const { sassLoaderProd } = require('./webpack.config.prod');

// ------------------------------------------------------------------ Configs
// ------------------------------------------------------------------

const HtmlConfigs = {
  title: 'Webpage title',
  template: resolve(__dirname, 'source/templates/index.html')
};

// ------------------------------------------------------------------

const plugins = () => {
  let arr = [];
  arr.push(new HtmlWebpackPlugin(HtmlConfigs));
  process.env.NODE_ENV != 'production'
    ? arr.push(...pluginsDev())
    : arr.push(...pluginsProd());
  return arr;
};

// ------------------------------------------------------------------

const entries = () => {
  let entries = [ 'babel-polyfill', 'whatwg-fetch' ];

  if (process.env.NODE_ENV != 'production') {
    entries.push(hotLoader);
  }

  entries.push(resolve(__dirname, 'source/javascripts/index.js'));
  return entries;
};

// ------------------------------------------------------------------

const sassLoader = () => {
  return process.env.NODE_ENV == 'production'
    ? sassLoaderProd()
    : sassLoaderDev();
};

// ------------------------------------------------------------------

let config = {
  entry: entries(),
  output: {
    filename: 'bundle_[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'source'),
  devtool:
    process.env.NODE_ENV == 'production'
      ? 'source-map'
      : 'cheap-module-source-map',
  stats: 'errors-only',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    disableHostCheck: true,
    openPage: '',
    stats: 'errors-only'
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: sassLoader()
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(svg)$/i,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(mp4|mov|webm|pdf|zip)$/,
        use: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(ttf|eot|otf|woff(2)?)(\w+)?$/,
        use: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.svg',
      '.pdf',
      '.zip'
    ],
    alias: {
      stylesheets: resolve(__dirname, 'source/stylesheets'),
      javascripts: resolve(__dirname, 'source/javascripts'),
      assets: resolve(__dirname, 'assets')
    }
  }
};

// ------------------------------------------------------------------

module.exports = config;
