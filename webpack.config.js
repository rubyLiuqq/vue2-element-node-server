const path = require('path');
const eslintFormatter = require('eslint-friendly-formatter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {},
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.join(__dirname, './src'),
        options: {
          formatter: eslintFormatter,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, './src'),
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
  ],
};

// if (process.env.NODE_ENV !== 'development') {
//   module.exports.output.publicPath = '//static.mex.meizu.com/fe-exception/';
// }
