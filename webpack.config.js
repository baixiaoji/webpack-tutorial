const path = require("path")

module.exports = {
    // 文件的入口
    entry: './src/index.js',
    // 文件的导出目录
    output: {
        // 文件名
        filename: 'bundle.js',
        // 导出的目录 __dirname 是就是当前的目录
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: "postcss-loader",options:{ parser: 'sugarss', exec: true}},
                    { loader: "css-loader", options: { importLoaders: 1 } },
                ]
            }
        ]
    }
}