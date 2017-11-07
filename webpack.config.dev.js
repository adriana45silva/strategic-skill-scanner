// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

const webpack = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { resolve } = require('path');
// ------------------------------------------------------------------

exports = pluginsDev = () => {
  return [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin(),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'async' })
  ];
};

// ------------------------------------------------------------------

exports = sassLoaderDev = () => {
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

  return sassLoaderDev;
};

// ------------------------------------------------------------------

exports = hotLoader = 'react-hot-loader/patch';

// ------------------------------------------------------------------

return (module.exports = { pluginsDev, sassLoaderDev, hotLoader });
