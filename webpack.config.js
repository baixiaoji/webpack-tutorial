const path = require("path")
const webpack = require("webpack")
module.exports = {
   devServer: { // 这里配置webpack-dev-server
       publicPath: "/dist/",
        hot: true,
   },
    // 文件的入口
    entry: './src/index.js',
    // 文件的导出目录
    output: {
        // 文件名
        filename: 'bundle.js',
        // 导出的目录 __dirname 是就是当前的目录
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热加载的插件
    ]
}
