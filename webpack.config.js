require('dotenv').config();

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join, resolve } = require('path');

const SRC_DIR = resolve(__dirname, './src');

const environment = process.env.NODE_ENV || 'development';
const development = environment === 'development';

module.exports = {
  cache: true,
  mode: environment,
  devtool: development ? 'eval-cheap-module-source-map' : 'source-map',

  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist/`,
  },

  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [SRC_DIR, 'node_modules'],
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: development ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment),
      'process.env.AUTH0_DOMAIN': JSON.stringify(process.env.AUTH0_DOMAIN),
      'process.env.AUTH0_CLIENT_ID': JSON.stringify(
        process.env.AUTH0_CLIENT_ID
      ),
      'process.env.AUTH0_AUDIENCE': JSON.stringify(process.env.AUTH0_AUDIENCE),
      'process.env.SERVER_URI': JSON.stringify(process.env.SERVER_URI),
    }),
  ],
  devServer: {
    static: {
      directory: join(__dirname, './src/assets'),
    },
    hot: true,
    port: 3030,
    host: 'localhost',
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
