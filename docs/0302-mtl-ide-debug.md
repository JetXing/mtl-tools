# MTL IDE调试详细文档

<a name="b7c0bfff"></a>
# 调试

注意：一旦开始调试，想要切换为其他端的调试，需要在Terminal进行”CTRL+C“操作，终端当前调试。

<a name="e2b698c9"></a>
### 1.安装插件

安装vscode插件debugger-for-chrome [插件地址](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

<a name="1a0782eb"></a>
### 2.使用Chrome进行调试

如下图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566808161450-bb9f8eb9-7e83-4bc8-8e28-b1ae007cff26.png#align=left&display=inline&height=223&name=image.png&originHeight=491&originWidth=1292&size=96710&status=done&width=587.272714543934#align=left&display=inline&height=491&originHeight=491&originWidth=1292&status=done&width=1292)<br />(1). 点击调试按钮<br />(2). 选择调试配置文件点击调试<br />(3). 查看配置文件launch.json,通过配置文件可以修改启动配置，配置文件在根目录.vsocde/launch.json下<br />(4).在IDE的代码中打断点，实现单步调试；也可以直接在Chrome中进行调试；<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567046942629-667e8572-ffd6-4b4c-8edb-07e98d728364.png#align=left&display=inline&height=163&name=image.png&originHeight=326&originWidth=822&size=55567&status=done&width=411)<br />*注意:调试前应先在TERMINAL中关闭其他进程，例如执行preview脚本启动的本地服务进程

<a name="f086565c"></a>
### 3.高级进阶
由于浏览器无法支持例如相机、扫描二维码这类调用原生能力接口的调用，为方便调试，mtl 支持通过文件配置接口返回模拟数据。<br />如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566808219005-f9da7f0f-22a0-497a-9440-c8c2d2df3f25.png#align=left&display=inline&height=346&name=image.png&originHeight=762&originWidth=1281&size=158634&status=done&width=582.272714652306#align=left&display=inline&height=762&originHeight=762&originWidth=1281&status=done&width=1281)<br />(1).下载支持调试功能的 mtl.js([下载](http://mobile.yyuap.com/mtl/download/mtljs/mtl.debug.zip)) 覆盖工程中原有的 mtl.js。<br />(2).在 mtl.js 同级目录下新建一个 **mtl.debug.js** 文件(若已存在则不需要重新创建)，修改 **mtl.debug.js** 配置自己想要的模拟数据。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567050116989-d4e51b85-ac82-47a1-b230-95b3c35e1960.png#align=left&display=inline&height=371&name=image.png&originHeight=742&originWidth=992&size=89328&status=done&width=496)<br />(3).在代码中调用对应的api，就可以获取到返回的模拟数据<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567050249395-7a857d0c-4ca3-45a3-8f19-26bc64c2ff6b.png#align=left&display=inline&height=245&name=image.png&originHeight=490&originWidth=1042&size=95985&status=done&width=521)<br />[说明文档参照](http://mtlapidocs201908061404.test.app.yyuap.com/#Ti9jD)


<a name="ae9f91c3"></a>
### 4.其他平台调试

mtl-ide脚本区域是由mtl-cli的封装(属性mtl-cli可自行封装丰富的脚本)<br />在 script 脚本区 执行对应的脚本

- 打开mtl script 脚本区
- 选择要要调试的平台（已Android为例）
- 点击![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566808341673-8116e4c9-15db-43b8-9259-5172c8a0b88f.png#align=left&display=inline&height=9&name=image.png&originHeight=19&originWidth=29&size=429&status=done&width=13.181817896109973#align=left&display=inline&height=19&originHeight=19&originWidth=29&status=done&width=29)<br />
更详细的参阅[**具体调试文档**](http://mtltoolsdocs20190806.test.app.yyuap.com/0202-mtl-cli-debug)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271500/1566808367888-cea70d6d-d9dc-423a-936b-6e9033cba318.png#align=left&display=inline&height=147&name=image.png&originHeight=324&originWidth=334&size=19561&status=done&width=151.81817852761142#align=left&display=inline&height=324&originHeight=324&originWidth=334&status=done&width=334)
