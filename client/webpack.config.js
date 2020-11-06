const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    compress: true,
    hot: true,
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/manifest.json', to: './manifest.json' },
        { from: './public/images/', to: './images/' },
        { from: './src/serviceWorker.js', to: './serviceWorker.js' },
      ],
    }),
  ],
};
