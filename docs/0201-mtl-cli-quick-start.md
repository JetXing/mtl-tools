


# 快速开始

<a name="支持的平台" class="anchor"></a >

### 支持的平台

简称 | 说明
---|---
android | Android平台
ios | iOS平台
WX | 微信小程序平台
DD | 钉钉E应用
web | 移动Web应用

<a name="系统环境要求" class="anchor"></a >

### 系统环境要求
兼容  Mac 和 win 操作系统。

<a name="前置软件安装" class="anchor"></a >

### 前置软件安装
+ 首先安装node.js、npm、git

<a name="安装mtl" class="anchor"></a >

### 安装mtl


```
npm -g install mtl-cli
```
在安装过程中 ，如果是Mac电脑遇到安装失败，权限不够，需要加上 sudo  。 例如： sudo npm -g install mtl-cli 。 安装完成后，运行下面命令，检查是否安装成功
```
mtl --version   //查看版本号
```
<a name="创建工程" class="anchor"></a>

### 创建工程

mtl 根据模板脚手架创建一个工程 

```
mtl create [appname] 
```
appname 是工程名称
+  此参数是必填项。参数不能是特殊字符 ，长度不要超过64。例如mtl-demo、mtl@……%demo 这样的工程命名都是不对的；
+  本地已创建的工程不能同名再创建，造成本地目录同名；

选择样版工程
+  ：一个空的MTL工程 。
+  : 一个MTL demo工程 ，涉及原生交互的一些功能。



<a name="创建页面" class="anchor"></a >

### 创建页面
```
mtl  add-page [pagename] 

```
pagename
+ 此参数是必填项，pagename 不能是特殊字符和汉字，长度不能超过64个字符；
+ 用户根据这个名称，替换模板页面中的模板变量，进行填槽，形成想要的页面。

用户选择想要添加的页面模板
+ empty:标准空页面 <--默认
+ list:标准列表页面
+ login:标准登录页面
+ ncc-login: ncc 登录页面
+ ncc-platform:ncc平台页面

<a name="添加插件引用原生功能" class="anchor"></a >

### 添加插件引用原生功能
```
mtl  add-plugin 
```
现在拥有的插件 ，持续开发中：[插件说明](http://mtltoolsdocs20190806.test.app.yyuap.com/0206-mtl-cli-plugin)
+ mtl-plugin-faceverify 人脸识别
+ mtl-plugin-bdlocation 定位
+ mtl-plugin-terminal   多端控制
+ mtl-plugin-umeng      三方友盟
+ mtl-plugin-vui        语音交互
```
用户进入多选 checkbox 操作中 ，通过按下 "空格" 键选择，
上下箭头来移动光标，按下"a"实现全选, 按下"i"实现反选。
“回车” 确认保存到project.json 文件中
```
<a name="调试" class="anchor"></a >

# 调试
```
mtl debug [ iOS | Android | WX | DD]
```

<a name="android 调试" class="anchor"></a >

### android 调试 
+ android 平台需要配置好 android开发环境 adb工具（adb 工具可以到开发中心下载）。安装android 模拟器 ，例如 网易模拟器 MuMu  ，确保adb 连接通 。

<a name="iOS 调试" class="anchor"></a >


### iOS 调试 
+ iOS 需要搭建好xcode 开发环境；
 
<a name="微信小程序调试" class="anchor"></a >

### 微信小程序调试
+ 微信小程序需要安装微信小程序工具：到微信公众平台去下载，[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
命令行进行mtl debug wx 后 ，用微信小程序工具导入当前工程目录./output/wx/debug/proj  ，这样就可以在微信小程序工具下看到 修改app目录下工程源码的调试效果。

<a name="钉钉小程序调试" class="anchor"></a >

### 钉钉小程序调试 

+ 钉钉小程序需要安装 蚂蚁金服开放平台 小程序工具，[下载地址](https://docs.alipay.com/mini/ide/download)。命令行进行mtl debug DD 后 ，用钉钉小程序工具导入当前工程目录./output/dd/debug/proj  ，这样就可以在钉钉小程序工具下看到 修改app目录下工程源码的调试效果。
 
<a name="调试host配置和功能说明" class="anchor"></a >
### 调试host配置和功能说明：
+ (仅调试微信需要)配置pc的host 文件如下： 添加“ 127.0.0.1       mobile.yyuap.com ”  ；
+ 修改文件热更新，如果在项目工程下，修改了project.json 或者 app目录下的工程源码都会自动更新到output平台目录下的工程目录，需要在 android ，iOS ，wx小程序工具 ，钉钉小程序工具 里刷新就可以看到修改的效果。
+ 友情提示，终端命令行在调试状态下 ，一直处于工程的监听中 ，请不要中断当前的状态 ，直到想要终止调试，进行其他操作。

<a name="预览" class="anchor"></a >

# 预览
```
mtl preview [ iOS | Android | WX | DD |Upesn]
```
<a name="android预览说明" class="anchor"></a >

### android预览说明：
+ 命令行执行预览android功能 ，需要用真机预先安装"android预览APP" （预览APP在下载中心中下载安装）。在真机安装后，打开预览APP的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

<a name="iOS 预览说明" class="anchor"></a >

### iOS 预览说明：
+ 命令行执行预览iOS功能 ，需要用真机预先安装"iOS预览APP" （预览APP在下载中心中下载安装）。在真机安装后，打开预览APP的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

<a name="微信小程序预览说明" class="anchor"></a >

### 微信小程序预览说明：
+ 命令行执行预览微信小程序功能 ，需要用真机的微信APP，用微信的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

<a name="钉钉小程序预览说明" class="anchor"></a >

### 钉钉小程序预览说明： 

+ 命令行执行预览钉钉小程序功能 ，需要用真机的钉钉APP，用钉钉的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

<a name="友空间预览说明" class="anchor"></a >

### 友空间预览说明：
+ 命令行执行预览Upesn功能 ，需要用真机的友空间APP，用友空间的扫码功能  ，扫码识别后 ，就可以验证项目开发功能的真机预览功能。

<a name="预览功能说明" class="anchor"></a >

### 预览功能说明：
+ 预览命令行执行后 ，会在pc开发设备形成二维码；
+ 修改文件热更新，如果在项目工程下，修改了project.json 或者 app目录下的工程源码都会自动更新到后台预览服务中，需要在 android  ，iOS  ，微信 ，钉钉，友空间 里刷新就可以看到更新的效果。
+ 友情提示，终端命令行在预览状态下 ，一直处于工程的监听中 ，请不要中断当前的状态 ，直到想要终止预览，进行其他操作。

<a name="构建" class="anchor"></a >

# 构建
```
mtl build [ iOS | Android ]
```

<a name="构建功能准备和功能说明" class="anchor"></a >

### 构建功能准备和功能说明：



+ 云构建server源码上传方式，将功能开发实现的静态源码资源与project.json 文件一并打包成zip压缩文件，上传至云构建server并完成构建打包。
+ 云构建server 支持git 远程代码下载到构建服务器进行云构建。需要在构建前通过"mtl set-git" 配置好Git 仓库 、分支、账号、密码等要素。
+ 云构建结束后会在控制台显示构建日志以及构建包存放目录；
+ 云构建成功后在output目录存放构建包。
