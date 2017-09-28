// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// ------------------------------------------------------------------
// Configs
// ------------------------------------------------------------------

const HtmlConfigs = {
  title: 'Webpage title',
  template: resolve(__dirname, 'source/templates/index.html')
};

const plugins = () => {
  if (process.env.NODE_ENV != 'production') {
    return [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(HtmlConfigs),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.NamedModulesPlugin(),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
      })
    ];
  } else {
    return [
      new HtmlWebpackPlugin(HtmlConfigs),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ];
  }
};

const entries = () => {
  let entries = ['babel-polyfill', 'whatwg-fetch'];

  if (process.env.NODE_ENV != 'production') {
    entries.push('react-hot-loader/patch');
  }

  entries.push(resolve(__dirname, 'source/javascripts/index.js'));

  return entries;
};

const sassLoader = () => {
  let sassLoaderDev = [
    'style-loader',
    {
      loader: 'css-loader?sourceMap'
    },
    {
      loader: 'sass-loader?sourceMap',
      options: {
        includePaths: [
          resolve(__dirname, 'source/stylesheets'),
          resolve(__dirname, 'node_modules')
        ]
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: resolve(__dirname, './postcss.config.js')
        }
      }
    }
  ];

  let sassLoaderProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            resolve(__dirname, 'src/stylesheets'),
            resolve(__dirname, 'node_modules')
          ]
        }
      },
      { loader: 'postcss-loader' }
    ]
  });

  return process.env.NODE_ENV == 'production' ? sassLoaderProd : sassLoaderDev;
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
          use: ['babel-loader'],
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
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
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
