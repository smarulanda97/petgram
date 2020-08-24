const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      title: 'Petgram - by Smarulanda 97'
    }),
    new Dotenv(),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your app of pets',
      short_name: 'Petgram',
      description: 'Within Petgram you can find the best pictures of prettiest pets',
      start_url: '/',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [{
        src: path.resolve(__dirname, 'public/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [{
        urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'images'
        }
      }, {
        urlPattern: new RegExp('https://petgram-api-smarulanda97.vercel.app'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api'
        }
      }]
    })
  ],
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true
  }
}
