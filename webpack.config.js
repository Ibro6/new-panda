const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: "./src/assets/img/cleaning.jpg", to: "./src/assets/img/" },
              { from: "./src/assets/img/like.jpg", to: "./src/assets/img/" },
              { from: "./src/assets/img/cascade.jpg", to: "./src/assets/img/" },
              { from: "./src/assets/img/driveway.jpg", to: "./src/assets/img/" },
            ],
          })
    ],
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }],
            },
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // Files
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                        {
                        loader: 'file-loader',
                    }, 
                ],
            },
        ],
    }
};