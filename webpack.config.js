const path = require('path')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filepath: path.resolve(__dirname, './dist'),
        filename: '[name]-[hash:5].js'
    }
}