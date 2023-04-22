const { join } = require('path');

const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: join(__dirname, './src/assets'),
    },
    hot: true,
    port: 3030,
    host: 'localhost',
    // host: '0.0.0.0', // if you want to check app by ip on other devices
    historyApiFallback: true,
    // proxy: {
    //   '/api/v2': {
    //     target: process.env.PROXY__API_URI,
    //     logLevel: 'debug',
    //     changeOrigin: true,
    //     secure: false,
    //     headers: {
    //       Connection: 'keep-alive',
    //     },
    //   },
    // },
  },
};
