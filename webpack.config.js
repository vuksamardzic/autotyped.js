const path = require('path');
const argv = require('yargs').argv;
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


let plugins = [
  new HtmlWebpackPlugin({
    templateParameters: {
      lib: {
        css: './autotyped.css',
        js: './autotyped.js'
      }
    },
    template: './src/demo/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css'
  }),
  new CopyPlugin([
    { from: 'lib', to: '' }
  ])
];

if (argv.p) {
  plugins = [...plugins, new CleanWebpackPlugin()];
}

module.exports = {
  mode: argv.p ? 'production' : 'development',
  entry: './src/demo/js/index.js',
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'demo')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins
};
