const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
  context: __dirname,
  entry: {
    'react-page': './react-page/js/react-page.js',
  },
  output: {
    filename: "[name].bundle.js", //输出文件名，默认为[name].js （参数：[name]对应entry中的name,[hash]/[hash:length]哈希码/匹配长度的哈希码，类似版本号，[chunkhash]块哈希码，[id]块id）
    path: __dirname + '/react-page/build'
  },
  module: {
    rules: [
      {test: /.js$/, use: ['babel-loader']},
      // {test: /.css$/, use: ['style-loader', 'css-loader']},/*解析css, 并把css添加到html的style标签里*/
      // //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
      // {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
      // {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
    ],
  },
  plugins: [ //额外插件项配置
    new CommonsChunkPlugin({//提取公共的块，即页面js共同的require()/import引用的文件
      name: 'common',
      filename: '[name].js', //公共模块文件名，若使用了[name]参数，则此name为common，也可以指定其他命名 ,若没有此选项则默认使用上面的output中的filename
      minChunks: 3,  //公共的块必须在3个以上entry中使用,默认值为2
      // names: ["app", "subPageA"],已选块名，用于children全部选择或者全部忽略
      // children: true,  //选择被选中的所有chunks,用于将公共模块移动到父块中
      // async: true,  //创建异步公共块
      // chunks: [ 'resume/resume-upload', 'resume/resume-folder']  //只提取上面entry中的upload和folder中的公共模块，若没有此选项则默认全部entry
    })
  ]
}