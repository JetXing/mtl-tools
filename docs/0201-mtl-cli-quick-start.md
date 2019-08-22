


# 快速开始
概述：mtl-cli

> mtl-cli 工具支持Android、iOS、微信、钉钉、移动web等多端同步跨平台开发，一套源码，多端调用 ，多端调试、多端预览 ，多端在云端服务构建生成不同的安装包以及发布包。提供工程模板脚手架，添加标准页面，原生能力插件等，并在云端构建打包等功能。

> 支持的平台

简称 | 说明
---|---
android | Android平台
ios | iOS平台
WX | 微信小程序平台
DD | 钉钉E应用
web | 移动Web应用

### 系统环境要求
兼容  Mac 和 win 操作系统。

### 前置软件安装
+ 首先安装node.js、npm、git


### 安装mtl


```
npm -g install mtl-cli
```
在安装过程中 ，如果是Mac电脑遇到安装失败，权限不够，需要加上 sudo  。 例如： sudo npm -g install mtl-cli 。 安装完成后，运行下面命令，检查是否安装成功
```
mtl --version   //查看版本号
```







### 创建工程

mtl 根据模板脚手架创建一个工程 

```
mtl create [appname] [template]
```
appname 是工程名称
+  此参数是必填项。参数不能是特殊字符 ，长度不要超过64。例如mtl-demo、mtl@……%demo 这样的工程命名都是不对的；
+  本地已创建的工程不能同名再创建，造成本地目录同名；

template 样版工程
+  ：一个空的MTL工程 。
+  : 一个MTL demo工程 ，涉及原生交互的一些功能。
+  ：一个MTL网络聊天工程工程 。
+  : 一个MTL网上商城工程。
+  ：一个MTL电商秀工程 。
+  : 一个MTL网络社交工程。
+  ：一个MTL销售分析工程 。

```
注意： 如果 mac 在创建工程结束的时候报错“Error: EACCES: permission denied” ，这个可能是 安装 express 没有权限导致 。
解决方法 ： 进入到你创建的**工程目录** 下 ，执行：sudo npm --save install express ，等待安装包执行完成后就可以了。 。  
```
### 配置工程信息

project.json文件 是工程配置文件，工程的信息以及各个端需要的重要数据都会集中在此文件中。

+ [**用户可以通过命令行更新或者手工配置**]
```
{
    "config": {
        "appName": "mtl",
        "packageName": "com.yonyou.mtl",
        "bundleID": "com.yonyou.uap.mobile5",
        "projectName": "mtl",
        "versionName": "1.0.0",
        "versionCode": "100",
        "versionBuild": "1.0.0",
        "startPage": "index.html",
        "debuggerEnable": "false",
        "reinforcement": "false",
        "sandbox": "false",
        "targetDevice": "handset",
        "statusBarTheme": "summer.Animations.NoTitleBar.FullScreen",
        "errorUrl": "",
        "urlScheme": "iosMtlScheme",
        "queriesSchemes": "",
        "androidScheme": "",
        "androidMinSdkVersion": "19",
        "isLibraryCompilation": "false",
        "ddAppCode": "dingnlb2wikil7pldytf",
        "wxAppCode": "dingnlb2wikil7pldytf",
        "cordovaPlugins": [],
        "gitUrl": "https://gogs.yonyoucloud.com/caiyi/mtl.git",
        "technologyStack": "tradition"
    }
}
```
简单介绍几个重要参数：
+  appName ：用户应用名称，一般在android ，iOS 构建打包后会生成的包名称。
+  packageName ： android的包ID 。
+  bundleID ： iOS 的bundleID 。
+  projectName ： 创建工程的名称，一般与appName同名皆可以 。
+  version**** ： 这个设置的android ，iOS 构建包的版本号，对于其他平台版本设置不涉及 。
+  startPage ： 这个是工程的首页地址 ，是很重要的参数 ！用户创建的工程无论调试、预览、构建都要关注这个参数 ，因为这是工程的入口 。
+  debuggerEnable ： 这个是android和iOS平台的调试构建包 ，暂时支持android ，后期支持iOS 。
+  reinforcement ： android的加固功能，暂时不支持 。
+  ****Schemes ： android和iOS的schemes配置 。
+ androidMinSdkVersion ： android支持的最小版本 。
+ ddAppCode、wxAppCode ： WX 、DD 小程序的接入code 。
+ cordovaPlugins ： 配置调用原生能力的插件列表。
+ technologyStack ： 这个是技术栈 ，要支持传统H5、react 、以及VUE等等框架。现在支持H5，以及即将上线的react框架。
+ setStatusBar ： 设置状态栏颜色（可为空)，参数如下:

	```
	showStatusBar：是否显示状态栏；
	isScreenEdge：是否从屏幕顶端开始，还是从状态栏下面开始；
	color：状态栏背景颜色；
	isStatusBarDefault：状态栏颜色是否是默认颜色(黑色)，否是白色
	
	1、为空默认值：showStatusBar : YES, isScreenEdge : NO, color: 透明, isStatusBarDefault : YES;
	2、showStatusBar为NO时，隐藏状态栏时 isScreenEdge默认为YES;
    3、color #000000 为16进制值
	```

### 设置android包名
```
mtl  set-packageName   

```
### 设置iOS bundleID
```
mtl  set-bundleID   

```
### 设置应用图标和启动图
app/css/themes/default/app/android、ios 文件夹下更改android、ios的图标和启动图。
遵循android、ios原生配置图标和启动图配置方式。

#### ios: 

+ 图标-icon文件夹
    
包含Contents.json文件和图片资源
```
Contents.json 配置图片
{
    "images" : [
        {
            "idiom" : "iphone",             // ipad、ios-marketing
            "size" : "20x20",               //40x40 图标大小
            "filename" : "iphone20@2x.png", //@3x.png  图片名称
            "scale" : "2x"                  // 3x
        },
        {...}
    ],
    "info" : {
        "version" : 1,
        "author" : "xcode"
    }
}
```
+ 启动图-launch文件夹
    
包含Contents.json文件和图片资源

```
Contents.json 配置图片
{
	"images" : [
		{
		    "orientation" : "portrait",                 // landscape
		    "idiom" : "iphone",                         // ipad
		    "extent" : "full-screen", 
		    "filename" : "iphone-portrait-736h@3x.png", // 图片名称
		    "minimum-system-version" : "8.0",           // 支持系统版本最小值
		    "subtype" : "736h",                         // 适配类型
		    "scale" : "3x"                              //2x
		},
        {...}
	],
	"info" : {
		"version" : 1,
		"author" : "xcode"
	}
}
```
		
#### andriod
+ app.png 应用图标(名称固定)
+ launch.png 启动图	(名称固定)	

### 设置首页
```
mtl  set-startPage   

```
以上三个设置项都是通过命令行 更新project.json 文件。


### 创建页面
```
mtl  add-page [pagename] [modelname] 

```
pagename
+ 此参数是必填项，pagename 不能是特殊字符和汉字，长度不能超过64个字符；
+ 用户根据这个名称，替换模板页面中的模板变量，进行填槽，形成想要的页面。

modelname
+ empty:标准空页面 <--默认
+ list:标准列表页面
+ login:标准登录页面
+ ncc-login: ncc 登录页面
+ ncc-platform:ncc平台页面


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
