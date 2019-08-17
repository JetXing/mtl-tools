# MTL-IDE使用文档

<a name="A1pR1"></a>
# 概览
为了帮助开发者简单和高效地开发和调试程序，我们在原有的-cli命令行工具的基础上，推出了全新的 [mtl-ide开发者工具](http://mtltoolsdocs20190806.test.app.yyuap.com/01-overview)。

- 调试原生api
- 使用开发工具调试，开发者可以完成API 和页面的开发调试、代码查看和编辑、程序预览和生成各个平台（微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native 等）发布等功能。

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008705545-0d38663b-ae32-4261-92aa-2c973aa619d9.png#align=left&display=inline&height=961&name=image.png&originHeight=1057&originWidth=1874&size=213628&status=done&width=1703.6363267110407)

<a name="oNuib"></a>
# 快速开始
<a name="5OYNX"></a>
### 前置安装
<a name="WWRC5"></a>
#### [安装vscode](https://code.visualstudio.com/Download)
<a name="GKqIn"></a>
#### [安装mtl](http://mtltoolsdocs20190806.test.app.yyuap.com/0201-mtl-cli-detail)

- 首先安装node.js、npm
- npm -g install mtl-cli

如果已经安装直接略过

<a name="DHL2F"></a>
### 安装MTL组件

- 打开VSCode
- 点击安装软件
- 搜索MTL
- 点击安装

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566010605575-9983cdc0-73e3-4426-a38c-bedf622c5ffa.png#align=left&display=inline&height=487&name=image.png&originHeight=536&originWidth=952&size=64783&status=done&width=865.4545266963238)
<a name="bsAY5"></a>
### MTL Workspace
安装成功后会出现MTL 工作区

<a name="tsZtH"></a>
### 新建项目

- 选择mtl工作区
- 点击创建工程（当前工程为空时会自动打开操作区域，未自动打开，在目录文件区-点击 --新建按钮--创建工程 ）
- 选择工程名称、目录
- 点击创建完成后会自动打开

[![屏幕录制 2019-08-17 上午11.06.06.mov (4.14MB)](https://cdn.nlark.com/yuque/0/2019/jpeg/271500/1566012347833-06e260e4-6a81-4aff-9bf5-de2cdeeb372e.jpeg?x-oss-process=image/resize,h_450)](https://www.yuque.com/yl66/gb4e4w/agegao?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6+2019-08-17+%E4%B8%8A%E5%8D%8811.06.06.mov%22%2C%22size%22%3A4343672%2C%22percent%22%3A0%2C%22id%22%3A%22504I1%22%2C%22videoId%22%3A%22958f544c75e04c6db92606c695fa3837%22%2C%22aliyunVideoSrc%22%3Anull%2C%22taobaoVideoId%22%3A%22233947663317%22%2C%22uploaderId%22%3A271500%2C%22authKey%22%3A%22YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiNDRkZWJkMDhkODg3ZjBiOGZmODdkM2RjMjFkNDAwNjQifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE1NjYwMjE3MjY%3D%22%2C%22docUrl%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fyl66%2Fgb4e4w%2Fagegao%22%2C%22coverUrl%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2019%2Fjpeg%2F271500%2F1566012347833-06e260e4-6a81-4aff-9bf5-de2cdeeb372e.jpeg%22%2C%22card%22%3A%22video%22%7D#504I1)
<a name="Jj9PK"></a>
### 目录文件区

- 工程目录结构
- 操作栏
  - 刷新
  - debug文件
  - 新建按钮，添加页面或创建工程

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008739967-0dc80f19-ce84-4d8e-a1f4-57cdc4df83c3.png#align=left&display=inline&height=295&name=image.png&originHeight=325&originWidth=264&size=10203&status=done&width=239.9999947981402)

<a name="v4OAo"></a>
### script 脚本区

- 默认脚本
  - 点击查看
  - 向右箭头执行脚本
- 操作栏
  - 刷新

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008864150-084e99b9-f9e9-4bee-b085-42bb0b190d2a.png#align=left&display=inline&height=395&name=image.png&originHeight=434&originWidth=268&size=27302&status=done&width=243.63635835568778)
<a name="TGFh3"></a>
###  mtlAPI预览
快速查看mtl api 点击向右箭头快速插入代码，点击？快速查看详细文档 

- api目录结构
  - 点击查看
  - 向右箭头插入
  - 问号、官网查看详细文档

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008956600-1f4bdf0f-16fb-4c8b-a4d8-b1e77633b7bd.png#align=left&display=inline&height=489&name=image.png&originHeight=538&originWidth=268&size=48082&status=done&width=243.63635835568778)


<a name="joBQm"></a>
# 代码编辑
<a name="mibVz"></a>
### mtlAPI快速插入

[![屏幕录制 2019-08-17 上午10.39.48.mov (2.85MB)](https://cdn.nlark.com/yuque/0/2019/jpeg/271500/1566012347882-c878d424-5ccd-4b8a-9162-ade8fb637de4.jpeg?x-oss-process=image/resize,h_450)](https://www.yuque.com/yl66/gb4e4w/agegao?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6+2019-08-17+%E4%B8%8A%E5%8D%8810.39.48.mov%22%2C%22size%22%3A2984303%2C%22percent%22%3A0%2C%22id%22%3A%22xOWK0%22%2C%22videoId%22%3A%229cf604eff6a748d0a4441ed9af0d021c%22%2C%22aliyunVideoSrc%22%3Anull%2C%22taobaoVideoId%22%3A%22233946019348%22%2C%22uploaderId%22%3A271500%2C%22authKey%22%3A%22YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiNDRkZWJkMDhkODg3ZjBiOGZmODdkM2RjMjFkNDAwNjQifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE1NjYwMjE3MjY%3D%22%2C%22docUrl%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fyl66%2Fgb4e4w%2Fagegao%22%2C%22coverUrl%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2019%2Fjpeg%2F271500%2F1566012347882-c878d424-5ccd-4b8a-9162-ade8fb637de4.jpeg%22%2C%22card%22%3A%22video%22%7D#xOWK0)
<a name="YM23x"></a>
### 自动补全

[![屏幕录制 2019-08-17 上午10.35.44.mov (1.93MB)](https://cdn.nlark.com/yuque/0/2019/jpeg/271500/1566012347911-b3eb93d8-f7f5-4828-9a5a-a6bb5275c9e1.jpeg?x-oss-process=image/resize,h_450)](https://www.yuque.com/yl66/gb4e4w/agegao?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6+2019-08-17+%E4%B8%8A%E5%8D%8810.35.44.mov%22%2C%22size%22%3A2022152%2C%22percent%22%3A0%2C%22id%22%3A%22pGNE4%22%2C%22videoId%22%3A%229c39ac0a19b34e2ba2729cd772576c65%22%2C%22aliyunVideoSrc%22%3Anull%2C%22taobaoVideoId%22%3A%22233655196106%22%2C%22uploaderId%22%3A271500%2C%22authKey%22%3A%22YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiNDRkZWJkMDhkODg3ZjBiOGZmODdkM2RjMjFkNDAwNjQifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE1NjYwMjE3MjY%3D%22%2C%22docUrl%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fyl66%2Fgb4e4w%2Fagegao%22%2C%22coverUrl%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2019%2Fjpeg%2F271500%2F1566012347911-b3eb93d8-f7f5-4828-9a5a-a6bb5275c9e1.jpeg%22%2C%22card%22%3A%22video%22%7D#pGNE4)
<a name="OF5GR"></a>
# 调试
<a name="mCp7v"></a>
### 

<a name="bUxxz"></a>
# 下载安装
版本更新 mtl-vs 0.0.7
<a name="xVfBB"></a>
### 


