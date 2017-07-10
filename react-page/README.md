# react分页组件

## 运行
### 安装
`
npm i
`
### 打包命令
`webpack`
## 使用
`
ReactDOM.render(
  <Page count="10" onClick={handleClick} />,
  document.getElementById('container')
)
`

## 参数说明

count 总页数(为1不显示分页组件)

onClick 回调函数

## 样式引进

`<link rel="stylesheet" href="css/react-page.css">`
## js引入（js为打包后自动生成文件，按路径引入）
`<script src="build/common.js"></script>`

`<script src="build/react-page.bundle.js"></script>`
