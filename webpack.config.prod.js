// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// ------------------------------------------------------------------

exports = pluginsProd = () => {
  return [
    new ExtractTextPlugin('styles_[hash].css'),
    new CleanWebpackPlugin(resolve(__dirname, 'dist')),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ];
};

// ------------------------------------------------------------------

exports = sassLoaderProd = () => {
  return  ExtractTextPlugin.extract({
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

  // return sassLoaderProd;
};

// ------------------------------------------------------------------

return (module.exports = {
  pluginsProd, sassLoaderProd
});
