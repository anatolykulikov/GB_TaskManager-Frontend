const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: 'http://localhost:3000/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src', 'components'),
        pages: path.resolve(__dirname, 'src', 'pages'),
        middleware: path.resolve(__dirname, 'src', 'middleware'),
        reducers: path.resolve(__dirname, 'src', 'reducers')
      },
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/, 
              exclude: '/node_modules/', 
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [
                  [
                    "@babel/plugin-proposal-class-properties", 
                    { 
                      "loose": true 
                    }
                  ]
                ]
              }
              
            },
            {
              test: /\.scss$/, 
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader',
                'sass-loader'
              ]
            },
            {
              test: /\.css$/, 
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader', ]
            }, 
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader',
              ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/style.css',
        }),
        new HtmlWebpackPlugin({  
          filename: 'index.html',
          template: 'src/index.html'
        })
    ]
}