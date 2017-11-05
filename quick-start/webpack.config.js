const path = require("path")
module.exports = {
  entry:'./index.js',
  output:{
  path: path.resolve(__dirname,'dist'), // 输出的目录
  filename: 'bundle.js' // 打包过后的文件名
}
}
