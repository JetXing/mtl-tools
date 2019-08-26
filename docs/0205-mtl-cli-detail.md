


# mtl-cli详细介绍


<a name="创建工程" class="anchor"></a >

### 创建工程

mtl 根据模板脚手架创建一个工程 

```
mtl create [appname] 
```
appname 是工程名称
+  此参数是必填项。参数不能是特殊字符 ，长度不要超过64。例如mtl-demo、mtl@……%demo 这样的工程命名都是不对的；
+  本地已创建的工程不能同名再创建，造成本地目录同名；
+  如果工程创建成功后  ，请务必先进入到工程跟目录下  ，例如 cd  “创建的工程名”
命令交互中，选择需要的样版工程
+  ：一个空的MTL工程 。
+  : 一个MTL demo工程 ，涉及原生交互的一些功能。

####  注意
```
如果 mac 在创建工程结束的时候报错“Error: EACCES: permission denied” ，这个可能是 安装 express 没有权限导致 。
解决方法 ：
1）、进入到你创建的**工程目录** 下 ，执行：sudo npm --save install express ，等待安装包执行完成后就可以了。
2）、修改你的workspace 目录操作权限，指令： sudo chmod -R 777 workspace 的文件夹目录。

如果在win上同样出现权限的报错，请查询win修改权限相关的操作。
如果在win上出现“no such file or directory...” ,说明git clone 失败，请查询
git的环境变量是否已经配置好。
```

<a name="工程配置文件" class="anchor"></a >

### 工程配置文件

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
        "technologyStack": "tradition",
        "setStatusBar": {
            "showStatusBar": true,
            "isScreenEdge": false,
            "color": "",
            "isStatusBarDefault": true
            }
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

### 设置首页
```
mtl  set-startPage   

```
以上三个设置项都是通过命令行 更新project.json 文件。

<a name="设置应用图标和启动图" class="anchor"></a >

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




<a name="创建页面" class="anchor"></a >

### 创建页面
```
mtl  add-page [pagename] 

```
pagename
+ 此参数是必填项，pagename 不能是特殊字符和汉字，长度不能超过64个字符；
+ 用户根据这个名称，替换模板页面中的模板变量，进行填槽，形成想要的页面。

命令交互中，选择需要的页面模板
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
+ android 平台需要配置好 android开发环境 ，至少adb工具。安装android 模拟器 ，例如 网易模拟器 nunu  ，确保adb 连接通 ， 可以使用 命令 ：adb connect 127.0.0.1:7555 （win），adb connect 127.0.0.1:5555 （mac）。如果debug过一次了没有成功，可以把工程根目录下的output/android/debug 目录删除 ，重新执行命令行debug 。如果 报错 error: more than one device and emulator ，可以用adb devices 命令看看是不是存在多个。发现还真是多个设备，那就需要为ADB命令指定设备的序列号了，
adb -s “emulator-5554” shell
也就是给命令加上-s的参数就可以了；

<a name="iOS 调试" class="anchor"></a >

### iOS 调试 
+ iOS 需要搭建好xcode 开发环境；

<a name="微信小程序调试" class="anchor"></a >

### 微信小程序调试
+ 微信小程序需要安装微信小程序工具：到微信公众平台去下载，下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html。命令行进行mtl debug wx 后 ，用微信小程序工具导入当前工程目录./output/wx/debug/proj  ，这样就可以在微信小程序工具下看到 修改app目录下工程源码的调试效果。

<a name="钉钉小程序调试" class="anchor"></a >

### 钉钉小程序调试 

+ 钉钉小程序需要安装 蚂蚁金服开放平台 小程序工具，下载地址：https://docs.alipay.com/mini/ide/download。命令行进行mtl debug DD 后 ，用钉钉小程序工具导入当前工程目录./output/dd/debug/proj  ，这样就可以在钉钉小程序工具下看到 修改app目录下工程源码的调试效果。
 

### debug 调试host配置和功能说明：
+ 配置pc的host 文件如下： 添加“ 127.0.0.1       mobile.yyuap.com ”  ；
+ 修改文件热更新，如果在项目工程下，修改了project.json 或者 app目录下的工程源码都会自动更新到output平台目录下的工程目录，需要在 android ，iOS ，wx小程序工具 ，钉钉小程序工具 里刷新就可以看到修改的效果。
+ 友情提示，终端命令行在调试状态下 ，一直处于工程的监听中 ，请不要中断当前的状态 ，直到想要终止调试，进行其他操作。


<a name="预览" class="anchor"></a >

# 预览
```
mtl preview [ iOS | Android | WX | DD |Upesn]
```

<a name="android预览说明" class="anchor"></a >

### android预览说明：
+ 命令行执行预览android功能 ，需要用真机预先安装"预览apk" ，在真机安装后，打开预览APP的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

<a name="iOS 预览说明" class="anchor"></a >

### iOS 预览说明：
+ 命令行执行预览iOS功能 ，需要用真机预先安装"预览IPA" ，在真机安装后，打开预览APP的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

<a name="微信小程序预览说明" class="anchor"></a >

### 微信小程序预览说明：
+ 命令行执行预览微信小程序功能 ，需要用真机的微信APP，用微信的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。

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
### 构建功能准备和功能说明：

```
    1、 在构建之前最好先设置一下构建打包方式，构建方式支持两种方式：源码上传打包 和 git 分支打包。 
命令： mtl set-buildType  设置构建方式。
    2、 在构建之前需要上传android 的打包签名文件；iOS的证书和描述文件 。上传证书的网站暂时不对外开放 。android 的签名文件，iOS的证书 和描述文件 可以先发邮箱给xugangm@yonyou.com或者在微信群里@david。
    android 的签名文件需要提供签名文件 ，密码 ，别名、别名密码以及包名ID，包名ID和签名文件是绑定的。
    iOS 提供证书和签名文件 、证书的密码以及iOS的bundle ID 。bundle ID和证书是绑定的关系。
```

+ 云构建server源码上传方式，将功能开发实现的静态源码资源与project.json 文件一并打包成zip压缩文件，上传至云构建server并完成构建打包。
+ 云构建server 支持git 远程代码下载到构建服务器进行云构建。需要在构建前通过"mtl set-git" 配置好Git 仓库 、分支、账号、密码等要素。
+ 云构建结束后会在控制台显示构建日志以及构建包存放目录；
+ 云构建成功后在output目录存放构建包。

<a name="运行" class="anchor"></a >

### 运行

```
mtl start  [ Android ]
```
### 安装运行说明
+ 请连接android真机设备或者模拟器。

<a name="git账号配置" class="anchor"></a >

# git账号配置
```
mtl set-git  
```
### 设置git说明
+ 用于云端构建 ，在构建服务器增量更新源码。
+ 根据提示 输入git仓库URL ，分支 ，账户，密码。

<a name="设置环境变量" class="anchor"></a >

### 设置环境变量
```
mtl set-config key value

//设置git的地址
mtl set-config git-url http://git.yonyou.com/xxx/xxx/
```
<a name="FAQ" class="anchor"></a >

# FAQ 


### 一 、mtl-cli不能安装？

```
答：
 权限不够导致， 请配置相应权限。

```


### 二、mtl-cli创建工程不成功？

```
答：
 如果 mac 在创建工程结束的时候报错“Error: EACCES: permission denied” ，这个可能是 安装 express 没有权限导致 。
解决方法 ：
1）、进入到你创建的**工程目录** 下 ，给当前用户权限。

2）、如果在win上同样出现权限的报错，请查询win修改权限相关的操作。
3）、如果在win系统上，出现工程无法下载，git 命令不识别 ，需要检查一下git 是否安装成功 ，mtl命令行工具是依赖git工具的 。如果git已经安装了 ，
请检查一下 命令的环境变量是否全局，在当前workspace目录下是否能够执行git 指令。也可以用另一种方法 ，在workspace目录下右击鼠标，
选择git bash here 命令，打开命令终端 ，然后在命令终端中执行创建工程的操作。


```

### 三 、为什么启动页不能替换？

```
答：
 1、对修改project.json文件的startPage项没有保存成功。
 2、修改的目录以及文件名称与实际工程的目录和文件名称不一致。

```

