// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

let ExtractTextPlugin = require('extract-text-webpack-plugin');

// ------------------------------------------------------------------

exports = pluginsProd = () => {
  return [
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
};

// ------------------------------------------------------------------

exports = sassLoaderProd = () => {
  let sassLoaderProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            resolve(__dirname, 'src/stylesheets'),
            resolve(__dirname, 'node_modules')
          ]
        }
      },
      {
        loader: 'postcss-loader'
      }
    ]
  });

  return sassLoaderProd;
};

// ------------------------------------------------------------------

return module.exports;
