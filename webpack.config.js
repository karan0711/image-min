var ImageminPlugin = require('imagemin-webpack-plugin').default;
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')
 
module.exports = {
    entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
      rules:[
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                    'file-loader'
                ]
            }
      ]
  },
  plugins: [
    new CopyWebpackPlugin([{
        from: './src/images/'
      }]),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
}