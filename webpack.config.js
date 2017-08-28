var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/*import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'*/

module.exports = {
    //设置入口文件
    entry:'./src/js/index.js',
    output: {
        //设置输出文件
        path:path.join(__dirname,'dist'),  //__dirname是nodejs中的一个全局变量，它指向的是我们项目的根目录
        //设置公共文件夹路径
        publicPath:'/',
        //设置输出的js文件的名字规则
        //[name]为chunk中的名称
        //[hash]为webpack生成的哈希值
        filename:'js/[name].[hash].bundle.js'

        /*path: __dirname + '/dist',
        filename: 'bundle.js'*/
    },
    module: {
        rules: [{
            //处理css文件
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, /*{
            //处理html文件，并处理img中src和data-src的引入路径
            test: /\.html$/,
            loader: 'html-loader?attrs=img:src img:data-src'
        }, */{
            //处理字体文件
            test:/\.(woff|woff2|ttf|eto|svg)(\?v=[0-9]\.[0-9])?$/,
            loader:'file-loader?name=./fonts/[name].[ext]'
        },{
            //处理图片
            test:/\.(png|jpg|gif)/,
            loader:'url-loader?limit=8192&name=./img/[hash].[ext]'
        }]
    },
    plugins:[
        //公共js提取
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',  //将公共模块提取，生成名为‘vendors’的chunk
            //minChunks:3    //提取至少3个模块共有的部分
        }),
        //压缩js代码
        new webpack.optimize.UglifyJsPlugin(),
        //提取公共的css样式
        new ExtractTextPlugin('./css/[name].css'),
        //分离CSS和JS文件
        //new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            //filename:'./view/index.html',  //生成的html存放路径，相对于path
            template:'./src/view/index.html',  //html模板路径
            /*inject:'body', //js插入的位置
            hash:true,  //为静态资源生成hash值
            //chunk:['vendors',allDirs[i]+'/'+matches[1]],  //需要引入的chunk,不配置就会引入所有页面的资源
            minify:{  //压缩HTML文件
                removeComments:true,  //移除html注释
                collapseWhitespace:false  //删除空白符与换行符

            }*/
        }),
        //new webpack.HotModuleReplacementPlugin();  //模块热替换
    ],
    //设置开发服务器
    devServer: {
        //contentBase:path.join(__dirname,'dist/'),  //本地服务器加载的页面所在的目录
        contentBase:__dirname + '/dist',
        host:'localhost',
        port:'9090',
        /*inline:true,  //实时刷新
        hot:true      //只刷新修改的部分，不刷新浏览器   //模块热替换*/
    }
};