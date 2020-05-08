const path = require('path');
const webpack =require('webpack');
const HtmlWebpackPlugin =require('html-webpack-plugin');
module.exports ={

    entry:[
      './src/index.js'
    ],
    output:{
      path:path.resolve(__dirname,'public'),
      filename:'bundle.js'
    },
    //最適化のコマンド
    mode:"production",
    //webpack-dev-serverの設定
    devServer:{
      contentBase:path.join(__dirname,'public'),
      port:9000,
      hot:true
    },
    //htmlWebpackPluginのプラグイン設定
    plugins:[
      new HtmlWebpackPlugin({
        title:'Plugin generate page',
        template:'src/root.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()

    ],
    //babel-loaderの設定
    module:{
      rules:[
        {
          test:/\.js$/,
          use:
            {
              loader :"babel-loader",
              options : {
                presets : [
                  "@babel/preset-env",
                  "@babel/react"
                ]
              }
            },
            exclude:/node_modules/
        }

      ]
    }



};
