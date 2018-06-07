var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html插件
var CopyWebpackPlugin = require('copy-webpack-plugin'); // 文件复制插件

const ExtractTextPlugin = require("extract-text-webpack-plugin"); //css插件
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/main.js', //唯一入口文件
    output: {
        path: path.resolve(__dirname, './dist'), //打包后的文件存放的地方，__dirname：node.js中的一个全局变量，它指向当前执行脚本所在的目录
        publicPath: '/', //生产模式下替换内嵌到css、html文件里的url值,比如图片url
        filename: 'js/build.js' //打包后输出文件的文件名
    },
    module: {
        rules: [{ //编译html
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }, {
                //编译css
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "vue-style-loader",
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                }),
            }, {
                //编译vue
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {},
                        postLoaders: {
                            html: 'babel-loader'
                        }
                    }
                }, {
                    loader: 'iview-loader',
                    options: {
                        prefix: false
                    }
                }]
            },
            {
                //编译iview文件夹下的js
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            },
            {
                // 编译js
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ //排除node_modules
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader', //// limit限制js中图片总共最大为1k，即图片不打进js
                query: {
                    limit: 1,
                    name: 'img/[name].[ext]', //// 生成图片的名字
                    publicPath: ''
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json'] // 默认扩展名，在js里引用时可省略这些扩展名
    },
    plugins: [
        new CopyWebpackPlugin([{ //复制public文件夹
            from: __dirname + '/src/public',
            to: __dirname + '/dist/public',
        }]),
        new HtmlWebpackPlugin({ //抽出html
            filename: 'index.html',
            template: __dirname + '/src/index.html',
            inject: true,
            minify: {
                collapseWhitespace: false,
                removeAttributeQuotes: false
            }
        }),
        new ExtractTextPlugin('css/index.css'), //抽出css
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    devServer: {
        contentBase: __dirname + '/dist', //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        noInfo: true,
        overlay: true,
        disableHostCheck: true
    },
    performance: {
        hints: false
    },
    devtool: '#source-map' //生成Source Maps（使调试更容易）
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: isProd //去掉console
            },
            output: {
                comments: !isProd, // 去掉注释内容
            },
        })
    ])
}