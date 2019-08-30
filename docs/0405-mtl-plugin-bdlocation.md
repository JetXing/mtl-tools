# 百度定位功能(安卓使用)


插件名称: mtl-plugin-bdlocation

<a name="e05dce83"></a>
### 简介

> 百度地图Android定位SDK是为Android移动端应用提供的一套简单易用的定位服务接口，专注于为广大开发者提供最好的综合定位服务。通过使用百度定位SDK，开发者可以轻松为应用程序实现智能、精准、高效的定位功能。


> 为应用提供定位服务，并且可以跳转到百度地图、高德地图等APP，实现出行路线的规划。


<a name="21f2fa80"></a>
### 参数说明
| 参数 | 说明 | 是否必传 |
| --- | --- | --- |
| BDMAP_KEY_ANDROID | Android平台百度定位mapKey | 是 |


<a name="c8a8e7b0"></a>
### 功能（[详细API](http://mtlapidocs201908061404.test.app.yyuap.com/0205-location-api)）
| 方法 | 功能 |
| --- | --- |
| getLocation | 获取当前坐标 |
| openLocation | 打开地图查看指定坐标位置 |


<a name="2ca50cf2"></a>
#### 参数获取流程

- 登录百度地图开发平台，网址：[http://lbsyun.baidu.com/]()
- 打开控制台，选择“创建应用”如下图：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271483/1567147906860-1b24f5a9-f1d3-4e67-bdcd-45fb021ed1e5.png#align=left&display=inline&height=770&name=image.png&originHeight=1540&originWidth=2650&size=364153&status=done&width=1325)

- 填写应用信息，SHA1值（创建应用页面有获取帮助，按着操作）和包名
- 应用创建完成点开“查看应用”，获取接口参数 BDMAP_KEY_ANDROID

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271483/1567148429545-9f71192f-e6dd-4cc5-b2e7-7176f34f7f9f.png#align=left&display=inline&height=797&name=image.png&originHeight=1594&originWidth=2600&size=333398&status=done&width=1300)

<a name="x9iBG"></a>
#### 参数生效须知
由于SHA1值和应用签名文件有关，需要在打包服务器上传自己的打包keystore文件。暂时由我们的开发人员（zhengwbd@yonyou.com）进行上传，需提供打包keystore文件密码及报名等。
