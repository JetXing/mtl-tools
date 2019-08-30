

# 调试 debug 模式
```
mtl debug [ iOS | Android | WX | DD]
```

<a name="android" class="anchor"></a >
## android 调试 

### 概述
- Android调试，指使用Android设备真机或者Android 网易模拟器 MuMu进行工程H5代码的调试；
- 准备：Android设备真机或者Android 网易模拟器 MuMu，pc端安装Chrome浏览器；
- 调试期间，开发者可在Chrome浏览器中跟踪方法是否调用；回调方法是否响应；代码罗辑是否正确等。


###  网易模拟器 MuMu 调试步骤

- 在电脑终端命令行进入已创建的工程目录（创建工程文档见：[链接](http://mtltoolsdocs20190806.test.app.yyuap.com/0201-mtl-cli-quick-start#%E5%88%9B%E5%BB%BA%E5%B7%A5%E7%A8%8B)）
- Windows电脑输入：adb connect 127.0.0.1:7555，mac电脑输入：adb connect 127.0.0.1:5555 ，链接网易模拟器 MuMu
- 输入：mtl d android，应用会自动运行到模拟器
- pc端打开Chrome浏览器，地址栏录入地址：[chrome://inspect/#devices]()

![debug1.png](https://cdn.nlark.com/yuque/0/2019/png/271483/1566790595694-6493e60b-fdab-42e3-810b-636a1337fda6.png#align=left&display=inline&height=1240&name=debug1.png&originHeight=1240&originWidth=1982&size=174735&status=done&width=1982)

- 点击红框内“inspect”（需翻墙），打开h5代码调试页面

![debug2.png](https://cdn.nlark.com/yuque/0/2019/png/271483/1566790749183-6609112c-23eb-4ed5-86b4-abd1fcde1cb7.png#align=left&display=inline&height=1730&name=debug2.png&originHeight=1730&originWidth=2872&size=915002&status=done&width=2872)

- 在页面打断点，点击模拟器运行工程的调用按钮，进行代码跟踪调试


<a name="S8PVI"></a>
### 真机调试步骤

- 在电脑终端命令行进入已创建的工程目录（创建工程文档见：[链接](http://mtltoolsdocs20190806.test.app.yyuap.com/0201-mtl-cli-quick-start#%E5%88%9B%E5%BB%BA%E5%B7%A5%E7%A8%8B)）
- 输入：mtl b android，打包工程
- 数据线连接真机设备，电脑命令输入：mtl start，应用会自动运行到真机上面
- pc端打开Chrome浏览器，地址栏录入地址：[chrome://inspect/#devices]()

![debug3.png](https://cdn.nlark.com/yuque/0/2019/png/271483/1566791242513-25821ce9-204e-44ab-96e4-a8882d5a3ddc.png#align=left&display=inline&height=1322&name=debug3.png&originHeight=1322&originWidth=1854&size=212105&status=done&width=1854)

- 点击红框内“inspect”（需翻墙），打开h5代码调试页面

![debug2.png](https://cdn.nlark.com/yuque/0/2019/png/271483/1566790749183-6609112c-23eb-4ed5-86b4-abd1fcde1cb7.png#align=left&display=inline&height=1730&name=debug2.png&originHeight=1730&originWidth=2872&size=915002&status=done&width=2872)

- 在页面打断点，点击真机运行工程的调用按钮，进行代码跟踪调试

<a name="ios" class="anchor"></a >

## iOS 调试 
+ iOS 需要搭建好xcode 开发环境；
#### 提示： 目前iOS仅支持模拟器调试。

#### 使用Safari浏览器调试WebView

使用Safari浏览器调试WebView比较简单无需过多的程序配置,只需点击几个开关按钮即可.

首先打开模拟器或者真机设置中"Safari浏览器"→"高级"→"Web检查器"的开关 如下图所示.

![WechatIMG1.jpeg](https://cdn.nlark.com/yuque/0/2019/jpeg/271511/1566799469597-7cbdd9ee-60fa-4e5f-9d62-4e774d43aae4.jpeg#align=left&display=inline&height=500&name=WechatIMG1.jpeg&originHeight=500&originWidth=1000&size=92724&status=done&width=1000)

然后我们打开Mac电脑的Safari浏览器,打开系统偏好设置(快捷键 commond + ,)或者如下图所示.


![WechatIMG3.png](https://cdn.nlark.com/yuque/0/2019/png/271511/1566799700876-c2591366-0c02-476b-9938-a29fd25192e1.png#align=left&display=inline&height=516&name=WechatIMG3.png&originHeight=516&originWidth=380&size=333931&status=done&width=380)


点击菜单中的"高级",然后勾选"在菜单栏中显示"开发"菜单".方便我们进行快速的调试.
![WechatIMG4.png](https://cdn.nlark.com/yuque/0/2019/png/271511/1566799717027-0e7459da-0623-4f2b-9801-c78f4b25e756.png#align=left&display=inline&height=912&name=WechatIMG4.png&originHeight=912&originWidth=1494&size=218341&status=done&width=1494)


这时候真机连接上数据线.或者开启模拟器就能在菜单栏"开发"选项中找到我们的设备或者是模拟器.


![WechatIMG6.png](https://cdn.nlark.com/yuque/0/2019/png/271511/1566799945966-4f6be8c4-e92b-4663-a677-ed10beba624c.png#align=left&display=inline&height=1366&name=WechatIMG6.png&originHeight=1366&originWidth=1384&size=2926053&status=done&width=1384)


接下来我们只需要跑起我们的工程进入对应的WebView页面即可进行调试.


![WechatIMG7.png](https://cdn.nlark.com/yuque/0/2019/png/271511/1566800025102-e1f3cdc7-f28f-4e50-ac4a-c27a092aaa5c.png#align=left&display=inline&height=840&name=WechatIMG7.png&originHeight=840&originWidth=1680&size=1753358&status=done&width=1680)


调试界面如下所示.


![WechatIMG57.png](https://cdn.nlark.com/yuque/0/2019/png/271511/1566800098162-1ecdfcb7-7e1c-4fa3-ac90-2c9ff4692148.png#align=left&display=inline&height=1704&name=WechatIMG57.png&originHeight=1704&originWidth=2190&size=345810&status=done&width=2190)

<a name="wx" class="anchor"></a>
## 微信小程序调试

执行指令：

```shell
$ mtl debug wx
```

打开"微信开发者工具"( [下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) )，然后选择 `/项目根目录/output/wx/debug/proj` 导入项目。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271502/1566786933008-1674d79e-121c-4aee-a122-aaf4ab5ca2ff.png?x-oss-process=image/resize,w_1492)

<a name="dd" class="anchor"></a>
## 钉钉小程序调试 

+ 钉钉小程序需要安装 蚂蚁金服开放平台 小程序工具，[下载地址](https://docs.alipay.com/mini/ide/download)。命令行进行mtl debug DD 后 ，用钉钉小程序工具导入当前工程目录./output/dd/debug/proj  ，这样就可以在钉钉小程序工具下看到 修改app目录下工程源码的调试效果。


<a name="tFXGW"></a>

<a name="EAhZ5"></a>
### 模拟器调试
<a name="AOxYZ"></a>
#### 打开小程序开发者工具，导入项目

![Jietu20190821-185844.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566455281172-347cc9e3-4f26-4840-97ea-89de73a30275.png?x-oss-process=image/resize,w_746)


![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566385484372-1ac8a74d-5e62-4409-9369-1d4ebd57a066.png#align=left&display=inline&height=212&name=image.png&originHeight=212&originWidth=586&size=32603&status=done&width=586)

打开项目的时候必须选择钉钉企业自建应用

![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566385648833-1ccad504-d8c5-4db8-8d01-cfa4dd0e48a8.png#align=left&display=inline&height=658&name=image.png&originHeight=658&originWidth=949&size=35888&status=done&width=949)


<a name="Moc76"></a>
#### 登录个人钉钉账号，同时关联通过钉钉后台创建的应用

![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566385841062-6b917be9-6b53-42fc-8edc-6811960cb554.png#align=left&display=inline&height=797&name=image.png&originHeight=797&originWidth=997&size=127571&status=done&width=997)


**注意：一定要是企业自建应用，选择需要关联的小程序**

![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566385931607-83a071ca-e606-49c3-9cb1-36ec65ce9593.png#align=left&display=inline&height=1602&name=image.png&originHeight=1602&originWidth=2011&size=413226&status=done&width=2011)


**模拟器上面调试的时候可以忽略域名检查**


![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566387005190-3d176281-41ec-4557-b6b3-80f3fccf0d8f.png#align=left&display=inline&height=793&name=image.png&originHeight=793&originWidth=1267&size=128025&status=done&width=1267)

现在就可以进行模拟器调试了。

<a name="P10tm"></a>
### 真机预览
<a name="l4Gat"></a>
#### 设置安全域名

小程序需要事先设置一个或多个服务端安全域名（或IP），小程序前端只能通过这些安全域名（或IP）与服务端进行网络通信。<br />登录[钉钉后台](https://oa.dingtalk.com/#/login)配置

![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566387290748-0a601287-4f81-4d30-b4aa-b8e58613af27.png#align=left&display=inline&height=1755&name=image.png&originHeight=1755&originWidth=3146&size=389273&status=done&width=3146)


<a name="gqXqI"></a>
### 本地真机调试
如果本地的html静态资源在本地，需要使用[内网穿透](https://ding-doc.dingtalk.com/doc#/kn6zg7/hb7000)功能，实现真机访问电脑端的localhost

<a name="WDhrU"></a>
#### 配置地址，同时配置到钉钉后台的安全域名
![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566387956147-98723955-c1c7-47e9-85cb-a918a61dbb35.png#align=left&display=inline&height=47&name=image.png&originHeight=47&originWidth=827&size=31275&status=done&width=827)

![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566387804896-9160db82-496c-4289-bdcf-3800c6524c83.png#align=left&display=inline&height=798&name=image.png&originHeight=798&originWidth=1263&size=199336&status=done&width=1263)

<a name="fqyxX"></a>
#### 更改localhost:3000地址为配置的地址，然后点击预览，真机扫描就可以体验真机版本了
![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1566444797717-d02aa186-221b-443c-a887-6c631a659631.png#align=left&display=inline&height=793&name=image.png&originHeight=793&originWidth=1254&size=227840&status=done&width=1254)



### debug 调试host配置和功能说明：
+ 调试配置pc的host 文件如下： 添加“ 127.0.0.1       mobile.yyuap.com ”  ；
+ 修改文件热更新，如果在项目工程下，修改了project.json 或者 app目录下的工程源码都会自动更新到output平台目录下的工程目录，需要在 android ，iOS ，wx小程序工具 ，钉钉小程序工具 里刷新就可以看到修改的效果。
+ 友情提示，终端命令行在调试状态下 ，一直处于工程的监听中 ，请不要中断当前的状态 ，直到想要终止调试，进行其他操作。







