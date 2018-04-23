const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/app.js',
        index: './src/index.js',
        vendor: './src/sum.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff2?)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         limit: 8192,
                    //     }
                    // },
                    // 'img-loader'
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunk: 2,
            chunks: ['app', 'index'],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest'],
            minChunk: Infinity,
        }),
    ]
}