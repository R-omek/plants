const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]'
  },
  devServer: develop 
  ? {
    open: true,
    hot: true,
    port: 4200,
    static: { 
      directory: path.join(__dirname, 'public') 
    },
    watchFiles: ['src/**/*']
  } : {},
  module: {
    rules: [
      {
        test: /\.[ts]s$/,
        use: [ 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?ico|gif|otf|ttf|eot|svg)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      ,{
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: develop ? '[name].css' : '[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {from: './public'}
      ]
    }),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
  ],
});