# MTL-IDE使用文档


<a name="oNuib" class="anchor"></a>
# 界面
<a name="DHL2F"></a>
### 安装MTL组件

- 打开VSCode
- 点击安装软件
- 搜索MTL
- 点击安装

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566010605575-9983cdc0-73e3-4426-a38c-bedf622c5ffa.png#align=left&display=inline&height=487&name=image.png&originHeight=536&originWidth=952&size=64783&status=done&width=865.4545266963238)
<a name="bsAY5"></a>
### MTL Workspace
安装成功后会出现MTL 工作区 点击进入<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566355468266-2ae82d50-5ef8-43c6-a796-1d6fdbc5bc99.png#align=left&display=inline&height=489&name=image.png&originHeight=538&originWidth=574&size=71280&status=done&width=521.8181705080775)
<a name="tsZtH"></a>
### 新建项目

- 选择mtl工作区
- 点击创建工程（当前当前工作空间为空时(vscode没有打开任何项目)，会自动打开操作区域，未自动打开，在[目录文件区](#87vl8)-点击 --新建按钮--创建工程 ）
- 选择工程名称、目录
- 点击创建完成后会自动打开
<a name="TKnEM"></a>
### 添加页面

- 点击添加页面
- 选择页面模板
- 输入名称
- 点击添加
- 在[目录文件区](#87vl8)-点击 --刷新按钮
[![屏幕录制 2019-08-17 上午11.06.06.mov (4.14MB)](https://cdn.nlark.com/yuque/0/2019/jpeg/271500/1566012347833-06e260e4-6a81-4aff-9bf5-de2cdeeb372e.jpeg?x-oss-process=image/resize,h_450)](https://www.yuque.com/mtldev/gd9vnw/agegao?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6+2019-08-17+%E4%B8%8A%E5%8D%8811.06.06.mov%22%2C%22size%22%3A4343672%2C%22percent%22%3A0%2C%22id%22%3A%22504I1%22%2C%22videoId%22%3A%22958f544c75e04c6db92606c695fa3837%22%2C%22aliyunVideoSrc%22%3Anull%2C%22taobaoVideoId%22%3A%22233947663317%22%2C%22uploaderId%22%3A271500%2C%22authKey%22%3A%22YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYTZlMzZkODkyOTljZTBhNWNjZTEyZGE4ZGUzMWMyYjkifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE1NjYzNjk0NDg%3D%22%2C%22docUrl%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fmtldev%2Fgd9vnw%2Fagegao%22%2C%22coverUrl%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2019%2Fjpeg%2F271500%2F1566012347833-06e260e4-6a81-4aff-9bf5-de2cdeeb372e.jpeg%22%2C%22card%22%3A%22video%22%7D#504I1)
<a name="Jj9PK"></a>
### 
<a name="87vl8"></a>
### 目录文件区

- 工程目录结构
- 操作栏
  - 刷新
  - debug文件
  - 新建按钮，添加页面或创建工程

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008739967-0dc80f19-ce84-4d8e-a1f4-57cdc4df83c3.png#align=left&display=inline&height=295&name=image.png&originHeight=325&originWidth=264&size=10203&status=done&width=239.9999947981402)

<a name="v4OAo"></a>
### script 脚本区
操作处理

- 默认脚本
  - 点击查看
  - 向右箭头执行脚本
- 操作栏
  - 刷新

脚本执行含义<br />注意：**熟悉mtl-cli命令的可以自行定义**

- build    点击执行 打包Android  ios原生包(目前支持)
- debug  调试 
- preview 执行后会生成预览二维码分为以下几种
  - **Android**  在下载中心 查找 [MTL-JSAPI-原生预览工具-Android预览工具](http://mobile.yyuap.com/new/mtl/download/) 下载安装后扫码即可
  - **IOS**         在下载中心 查找 [MTL-JSAPI-原生预览工具-IOS预览工具]() 下载安装后扫码即可
  - **微信 **        用手机扫码即可
  - **upesn**     用手机友空间扫码
- <br />

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008864150-084e99b9-f9e9-4bee-b085-42bb0b190d2a.png#align=left&display=inline&height=395&name=image.png&originHeight=434&originWidth=268&size=27302&status=done&width=243.63635835568778)
<a name="TGFh3"></a>
###  mtlAPI快速预览使用
快速查看mtl api 点击向右箭头快速插入代码，点击？快速查看详细文档 

- api目录结构
  - 点击查看
  - 点击向右箭头插入 编辑文档的光标位置
  - 问号、会索引到官网查看详细文档

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008956600-1f4bdf0f-16fb-4c8b-a4d8-b1e77633b7bd.png#align=left&display=inline&height=489&name=image.png&originHeight=538&originWidth=268&size=48082&status=done&width=243.63635835568778)


<a name="joBQm"></a>
# 代码编辑
<a name="mibVz"></a>
### mtlAPI快速插入

[![屏幕录制 2019-08-17 上午10.39.48.mov (2.85MB)](https://cdn.nlark.com/yuque/0/2019/jpeg/271500/1566012347882-c878d424-5ccd-4b8a-9162-ade8fb637de4.jpeg?x-oss-process=image/resize,h_450)](https://www.yuque.com/mtldev/gd9vnw/agegao?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6+2019-08-17+%E4%B8%8A%E5%8D%8810.39.48.mov%22%2C%22size%22%3A2984303%2C%22percent%22%3A0%2C%22id%22%3A%22xOWK0%22%2C%22videoId%22%3A%229cf604eff6a748d0a4441ed9af0d021c%22%2C%22aliyunVideoSrc%22%3Anull%2C%22taobaoVideoId%22%3A%22233946019348%22%2C%22uploaderId%22%3A271500%2C%22authKey%22%3A%22YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYTZlMzZkODkyOTljZTBhNWNjZTEyZGE4ZGUzMWMyYjkifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE1NjYzNjk0NDg%3D%22%2C%22docUrl%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fmtldev%2Fgd9vnw%2Fagegao%22%2C%22coverUrl%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2019%2Fjpeg%2F271500%2F1566012347882-c878d424-5ccd-4b8a-9162-ade8fb637de4.jpeg%22%2C%22card%22%3A%22video%22%7D#xOWK0)
<a name="YM23x"></a>
### 自动补全

<a name="yfv8U"></a>
#### mtl.
输入mtl. 会自动提示 mtl相关api<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566355271676-c50d7a0e-a323-448f-9cfc-fc814ebadc80.png#align=left&display=inline&height=324&name=image.png&originHeight=356&originWidth=949&size=65603&status=done&width=862.7272540281631)
<a name="MqS55"></a>
#### API名称提示
直接输入方法名可以提示相应的api

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566355333500-eaef96de-a909-4608-bd79-2dcd2e6b2e09.png#align=left&display=inline&height=579&name=image.png&originHeight=637&originWidth=1123&size=120944&status=done&width=1020.9090687814828)

<a name="OF5GR"></a>
# 调试
待更新

<a name="bUxxz"></a>
# 下载安装
版本更新 [mtl-vs ](https://marketplace.visualstudio.com/items?itemName=mtl-ide.mtl-vs)[0.0.7](https://marketplace.visualstudio.com/items?itemName=mtl-ide.mtl-vs)<br />版本更新 mtl-vs 0.0.8
<a name="xVfBB"></a>
### 


