// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

const { resolve } = require('path');
const functionsDev = require('./webpack.config.dev');
const functionsProd = require('./webpack.config.prod');

// ------------------------------------------------------------------
// Configs
// ------------------------------------------------------------------

const entries = () => {
  let entries = [ 'babel-polyfill', 'whatwg-fetch' ];

  if (process.env.NODE_ENV != 'production') {
    entries.push(functionsDev.hotLoader);
  }

  entries.push(resolve(__dirname, 'source/javascripts/index.js'));

  return entries;
};

let plugins = () => {
  let HtmlConfigs = {
    title: 'Webpage title',
    template: resolve(__dirname, 'source/templates/index.html')
  };

  return [ new HtmlWebpackPlugin(HtmlConfigs) ];
};

let joinedPlugins = () => {
  if (process.env.NODE_ENV == 'production') {
    plugins.push(...functionsProd.plugins());
  } else {
    plugins.push(...functionsDev.plugins());
  }
  return plugins;
};

let config = {
  dev: {
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
      open: true,
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
  },
  prod: {
    entry: entries(),
    output: {
      filename: 'bundle_[hash].js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devtool:
      process.env.NODE_ENV == 'production'
        ? 'source-map'
        : 'cheap-module-eval-source-map',
    plugins: joinedPlugins(),
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
  }
};

module.exports =
  process.env.NODE_ENV == 'production' ? config.prod : config.dev;
