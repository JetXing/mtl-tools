# MTL-IDE使用文档

<a name="oNuib"></a>
# 界面
<a name="DHL2F"></a>
### 安装MTL组件

- 打开VSCode
- 点击安装软件
- 搜索MTL
- 点击安装

<a name="bsAY5"></a>
### MTL Workspace
安装成功后会出现MTL 工作区 点击进入<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566807859892-c388eabe-c9b3-4049-886e-0629e0061763.png#align=left&display=inline&height=341&name=image.png&originHeight=751&originWidth=638&size=65925&status=done&width=289.9999937144194)
<a name="lgQfj"></a>
### 创建工程
MTL工作区，如图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790491881-756462cb-71e5-40de-9caf-c3a8fb2b0dcf.png#align=left&display=inline&height=502&name=image.png&originHeight=1004&originWidth=1538&size=215761&status=done&width=769#align=left&display=inline&height=1004&originHeight=1004&originWidth=1538&status=done&width=1538)<br />(1).MTL工作区内，开发者可以创建工程，打开工程，添加页面，配置工程文件，查看帮助等。若工作区被关闭，可以点击目录区![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566548341740-9ec99b15-9832-44b0-a896-fb07c389cc71.png#align=left&display=inline&height=13&name=image.png&originHeight=26&originWidth=432&size=9452&status=done&width=216#align=left&display=inline&height=10&originHeight=26&originWidth=432&status=done&width=160)右上角的![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566548368080-dee9c8a1-1183-4c67-a578-8cb7249c58fb.png#align=left&display=inline&height=12&name=image.png&originHeight=24&originWidth=28&size=3655&status=done&width=14#align=left&display=inline&height=13&originHeight=24&originWidth=28&status=done&width=15)按钮重新打开工作区。<br />(2).选择创建工程，修改工程名，选择工程存放目录，选择模板，点击创建按钮，即可创建一个mtl工程。<br />(3).工程创建成功后，会自动打开所创建的工程。<br />(4).开发者根据各自的业务，开始编写代码。<br />[]()
<a name="QFz3H"></a>
### 添加页面
MTL IDE除了提供工程模板以为，还提供丰富的页面目标供开发者使用。如图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790981247-595984df-ff07-41a7-a581-3124fe8bd90d.png#align=left&display=inline&height=415&name=image.png&originHeight=830&originWidth=1524&size=149506&status=done&width=762#align=left&display=inline&height=830&originHeight=830&originWidth=1524&status=done&width=1524)<br />(1).在工作区内选择添加页面，添加页面名称->选择页面模板，点击添加，即可添加页面至工程目录内<br />(2).创建后的页面如下图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790837333-f7375f58-2d80-4c49-be60-c0df29396f4b.png#align=left&display=inline&height=235&name=image.png&originHeight=470&originWidth=436&size=40480&status=done&width=218#align=left&display=inline&height=470&originHeight=470&originWidth=436&status=done&width=436)<br />*若添加页面成功后，工程目录内没有显示，点击![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790907341-818cde17-b019-4dda-91e2-567b354243bb.png#align=left&display=inline&height=13&name=image.png&originHeight=26&originWidth=30&size=4389&status=done&width=15#align=left&display=inline&height=13&originHeight=26&originWidth=30&status=done&width=15)刷新即可
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
  - **Android**  在下载中心 查找 [MTL-JSAPI-原生预览工具-Android预览工具](http://mobile.yyuap.com/mtl/download/) 下载安装后扫码即可
  - **IOS**         在下载中心 查找 [MTL-JSAPI-原生预览工具-IOS预览工具](http://mobile.yyuap.com/mtl/download/) 下载安装后扫码即可
  - **微信 **        用手机扫码即可
  - **upesn**     用手机友空间扫码
- <br />

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566008864150-084e99b9-f9e9-4bee-b085-42bb0b190d2a.png#align=left&display=inline&height=395&name=image.png&originHeight=434&originWidth=268&size=27302&status=done&width=243.63635835568778)
<a name="TGFh3"></a>
###  mtlAPI快速预览使用
快速查看mtl api 点击向右箭头快速插入代码，点击？快速查看详细文档 

- api目录结构
  - 点击查看
  - 点击向右箭头插入 编辑文档的光标位置![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566806473086-cd6836cb-c046-4a6d-81ea-2b312a7501a7.png#align=left&display=inline&height=17&name=image.png&originHeight=37&originWidth=316&size=4610&status=done&width=143.63636052312935)
  - 问号、会索引到官网查看详细文档


![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566807921821-50cf1adb-b116-4be7-9dec-6972b22fff5b.png#align=left&display=inline&height=358&name=image.png&originHeight=788&originWidth=1147&size=150313&status=done&width=521.3636250633841)


<a name="joBQm"></a>
# 代码编辑



<a name="YM23x"></a>
### 自动补全

<a name="yfv8U"></a>
#### mtl.
输入mtl. 会自动提示 mtl相关api<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566807966490-586f19b6-73eb-42ec-8d1f-113424e4f0fe.png#align=left&display=inline&height=197&name=image.png&originHeight=433&originWidth=737&size=37197&status=done&width=334.9999927390707)
<a name="MqS55"></a>
#### API名称提示
直接输入方法名可以提示相应的api

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566807988194-8b56e0d1-007f-4820-85c6-9ed804e3d61a.png#align=left&display=inline&height=189&name=image.png&originHeight=416&originWidth=924&size=88137&status=done&width=419.9999908967454)


<a name="bUxxz"></a>
# 下载安装
版本更新 [mtl-vs ](https://marketplace.visualstudio.com/items?itemName=mtl-ide.mtl-vs)[0.0.7](https://marketplace.visualstudio.com/items?itemName=mtl-ide.mtl-vs)<br />版本更新 [mtl-vs ](https://marketplace.visualstudio.com/items?itemName=mtl-ide.mtl-vs)[0.0.8]()
<a name="xVfBB"></a>
### 


