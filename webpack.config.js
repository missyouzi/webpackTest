const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry:{
        app:'./app/js/main.js'
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:['html-loader']
            },{
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader',
                    options:{ 
                        // modules: true,
                        localIdentName: '[local]_[hash:base64:8]',
                        cssModules: {
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                        }
                    }
                }
             ],
            },{
                test:/\.scss$/,
                use:[
                    'vue-style-loader',
                    {
                        loader:'css-loader',
                        options: { modules: true }

                },
                'sass-loader',
                {
                    loader:'px2rem-loader'
                ,options:{remUnit:75,remPrecision:8}}
            ]},
            {
                test: /\.css$/,
                use:[
                    'vue-style-loader',
                    {loader: 'style-loader',options:{
                        // modules: true,
                        localIdentName: '[local]_[hash:base64:8]',
                        cssModules: {
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                          }
                    }
                  }, {
                    loader: 'css-loader',options: {
                        // modules: true,
                        localIdentName: '[local]_[hash:base64:8]',
                        cssModules: {
                          localIdentName: '[path][name]---[local]---[hash:base64:5]',
                          camelCase: true
                        }
                      }
                  }, {loader: 'px2rem-loader',
                  // options here
                  options: {
                    remUnit: 75,
                    remPrecision: 8
                  }
            }]
          }
        ],
    },
    devServer:{
        contentBase:'./dist'
    },
        plugins:[
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Development',
                template:'./app/views/index.html'
            }),
            new VueLoaderPlugin()
        ],
        resolve:{
            alias:{
                'vue$':'vue/dist/vue.esm.js'
            }
        },
        output:{
            filename:'[name].min.js',
            path:path.resolve(__dirname,'dist')
        }

}