const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
  // {
  //   test: /\.css$/,
  //   exclude: /node_modules/,
  //   use: [
  //     { loader: 'css-loader' },
  //     { loader: 'style-loader' }
  //   ]
  // }
]

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js'
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
