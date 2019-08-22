

# 调试 debug 模式
```
mtl debug [ iOS | Android | WX | DD]
```

### android 调试 
+ android 平台需要配置好 android开发环境 ，至少adb工具。安装android 模拟器 ，例如 网易模拟器 nunu  ，确保adb 连接通 ， 可以使用 命令 ：adb connect 127.0.0.1:7555 （win），adb connect 127.0.0.1:5555 （mac）。如果debug过一次了没有成功，可以把工程根目录下的output/android/debug 目录删除 ，重新执行命令行debug 。如果 报错 error: more than one device and emulator ，可以用adb devices 命令看看是不是存在多个。发现还真是多个设备，那就需要为ADB命令指定设备的序列号了，
adb -s emulator-5554 shell
也就是给命令加上-s的参数就可以了；
### iOS 调试 
+ iOS 需要搭建好xcode 开发环境；
### 微信小程序调试
+ 微信小程序需要安装微信小程序工具：到微信公众平台去下载，[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
命令行进行mtl debug wx 后 ，用微信小程序工具导入当前工程目录./output/wx/debug/proj  ，这样就可以在微信小程序工具下看到 修改app目录下工程源码的调试效果。
### 钉钉小程序调试 

+ 钉钉小程序需要安装 蚂蚁金服开放平台 小程序工具，[下载地址](https://docs.alipay.com/mini/ide/download)。命令行进行mtl debug DD 后 ，用钉钉小程序工具导入当前工程目录./output/dd/debug/proj  ，这样就可以在钉钉小程序工具下看到 修改app目录下工程源码的调试效果。
 

### debug 调试host配置和功能说明：
+ 配置pc的host 文件如下： 添加“ 127.0.0.1       mobile.yyuap.com ”  ；
+ 修改文件热更新，如果在项目工程下，修改了project.json 或者 app目录下的工程源码都会自动更新到output平台目录下的工程目录，需要在 android ，iOS ，wx小程序工具 ，钉钉小程序工具 里刷新就可以看到修改的效果。
+ 友情提示，终端命令行在调试状态下 ，一直处于工程的监听中 ，请不要中断当前的状态 ，直到想要终止调试，进行其他操作。







