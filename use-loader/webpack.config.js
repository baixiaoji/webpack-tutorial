const path = require("path")
module.exports = {
  entry:'./index.js',
  output:{
  path: path.resolve(__dirname,'dist'), // 输出的目录
  filename: 'bundle.js' // 打包过后的文件名
  },
module:{
  rules:[
    {
      test:/\.js$/, // 匹配规则
      use: 'babel-loader', // 使用那个loader处理文件
      exclude:/node_module/ , //不包括的目录
    },
    {
      test:/\.css$/,
      use:['style-loader',{
           loader:'css-loader',
           options:{
              modules:true
           }
      }]
    }   
]
}
}
