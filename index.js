/**
 * Created by lyy on 2017/8/25.
 */
//1.新建空文件夹webpack-demo
//2.进入文件夹，运行npm init,生成文件夹package.json
//3.安装webpack及其基本插件
//npm i webpack  extract-text-webpack-plugin html-webpack-plugin css-loader file-loader style-loader url-loader -D
//extract-text-webpack-plugin:该插件主要是为了抽离css样式，可以将css从打包的js中抽离出来。以link方式引入样式
//html-webpack-plugin:该插件主要是用于生成html文件，并可以根据入口文件来引入相应的文件
//css-loader:解析css文件中的import和require,并处理他们
//style-loader:将css样式通过style标签注入到html文件中
//file-loader:指明webpack将所引入的对象，并返回一个公网能访问的url地址
//url-loader:将文件转换成base64编码
//4.配置webpack  webpack.config.js


//UglifyJsPlugin：压缩JS代码；
//ExtractTextPlugin：分离CSS和JS文件
