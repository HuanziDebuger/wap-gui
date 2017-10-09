var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件

module.exports = {
    // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: "./app", //最好写上，否则报错，难道这里是一个坑？
        port: 3003
    },

    // 配置入口
    entry: {
        pages: __dirname +'/app/src/router.jsx',
        vendors:['react','react-dom','react-router','reflux']  //第三方库和框架
    },
    output: {
        path: __dirname + '/app/dist',
        publicPath:'dist/',  //事实上，这个配置直接影响了图片的输出路径
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({fallbackLoader:'style-loader', loader:'css-loader'}) }, //坑：不能用叹号链接，必须写成这种格式
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader!less-loader') },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader' },
            {
                test: /\.vue$/,
                loader: 'react-vue-loader'
            },
            {
                test: /\.md$/, //废了好大劲找出来的
                loader:'raw-loader'
            }
        ]       
        
    },
    resolve: {
        extensions: [' ', '.js', '.jsx','.md'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({'name':'vendors','filename':'js/vendors.js'}),
        new ExtractTextPlugin("css/bundle.css"),
        // 热更新        
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url:'http://localhost:3003'})
    ]
};
