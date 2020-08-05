const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const  HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = {

    entry:resolve('./demo4/src/index.js'),
    output: {
        path:resolve('./demo4/dist'),
        filename: 'main_[hash].js'
    },
    //用webpack-dev-serve 启动一个服务器
    devServer: {
        // 本地服务器指定的路径
        contentBase: resolve('./demo4/dist'),
        // 是否压缩
        compress: true,
        // 端口号
        port: 8080
    },
    mode: 'development',
    // 插件
    plugins:[
        // 抽离样式的插件
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // html 移动插件
        new HtmlWebpackPlugin({
            filename: 'index.html', //移动html后的最终文件名
            template: resolve('./demo4/public/index.html') //需要移动的文件
        })
    ],
    // 加载器
    module:{
        rules:[
            // 如果引入一个图片
            {
                test: /\.(jpg|png|gif|jpeg)$/,  //正则表达式  
                exclude: /(node_modules|bower_components)/, //去除目录
                use:['url-loader']
            },
            //如果引入的文件是以less结尾的
            {
                test: /\.(m?less)$/,  //正则表达式  
                exclude: /(node_modules|bower_components)/, //去除目录
                use:[
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'] //从后向前看
            },
            // 如果引入的模块是css 
            {
                test: /\.(m?css)$/,  //正则表达式   
                exclude: /(node_modules|bower_components)/, //去除目录
                use:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader']     
            },
            // 若果引入的模块以js结尾 里面可能有jsx 需要用babel解析
            {
                test: /\.(m?js)$/,  //正则表达式
                exclude: /(node_modules|bower_components)/, //去除目录
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-react-jsx']
                    }
                }
            },   
        ]
    }
};
