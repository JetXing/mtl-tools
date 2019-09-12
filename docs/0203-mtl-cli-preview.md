


# 预览
```
mtl preview [ iOS | Android | WX | DD |Upesn]
```

### android预览说明：
+ 命令行执行预览android功能 ，需要用真机预先安装"android预览APP" （预览APP在下载中心[MTL-JSAPI-原生预览工具-Android预览工具](http://mobile.yyuap.com/mtl/download/)中下载安装）。在真机安装后，打开预览APP的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。


### iOS 预览说明：
+ 命令行执行预览iOS功能 ，需要用真机预先安装"iOS预览APP" （预览APP在下载中心[MTL-JSAPI-原生预览工具-iOS预览工具](http://mobile.yyuap.com/mtl/download/)中下载安装）。在真机安装后，打开预览APP的扫码功能  ，扫码识别后 ，就可以验证项目开发的真机预览功能。


### 微信小程序预览说明：

执行指令：

```shell
$ mtl preview wx
```

指令完成后会生成一个二维码，使用手机"微信"的"扫一扫"功能识别二维码即可预览项目在微信上的运行效果。

### 钉钉小程序预览

> 使用钉钉端预览模式需要加入企业，自建应用只有企业员工可以使用，下面是使用步骤：


- 扫描企业团队的二维码：<br />


![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1567749538045-adf1fe44-8ea0-4117-9c39-8aaa2d76a879.png#align=left&display=inline&height=938&name=image.png&originHeight=938&originWidth=670&size=112266&status=done&width=670)<br />
<br />

- 扫描以后等待管理员批准加入以后，在手机端钉钉-工作页面-左上角切换<北京MTL>


<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1567749715591-705a9b90-9928-4108-ae39-16f6950b6a37.png#align=left&display=inline&height=915&name=image.png&originHeight=915&originWidth=526&size=123688&status=done&width=526)<br />
<br />

- 切换到本企业团队以后，下拉查看其他应用-MTL演示：<br />

![image.png](https://cdn.nlark.com/yuque/0/2019/png/238629/1567749828509-310dfcba-56e6-4d5f-bb9f-91807591d8f4.png#align=left&display=inline&height=909&name=image.png&originHeight=909&originWidth=520&size=122621&status=done&width=520)<br />
<br />

- 打开MTL演示应用的扫码功能 ，扫码识别后 ，就可以验证项目开发的真机预览功能。


### 友空间预览说明：
+ 命令行执行预览Upesn功能 ，需要用真机的友空间APP，用友空间的扫码功能  ，扫码识别后 ，就可以验证项目开发功能的真机预览功能。


### 预览功能说明：
+ 预览命令行执行后 ，会在pc开发设备形成二维码；
+ 修改文件热更新，如果在项目工程下，修改了project.json 或者 app目录下的工程源码都会自动更新到后台预览服务中，需要在 android  ，iOS  ，微信 ，钉钉，友空间 里刷新就可以看到更新的效果。
+ 友情提示，终端命令行在预览状态下 ，一直处于工程的监听中 ，请不要中断当前的状态 ，直到想要终止预览，进行其他操作。



