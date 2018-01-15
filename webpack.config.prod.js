// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// ------------------------------------------------------------------

exports = pluginsProd = () => {
  return [
    new UglifyJsPlugin({
      uglifyOptions: { ecma: 8 }
    }),
    new ExtractTextPlugin('styles_[hash].css')
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
