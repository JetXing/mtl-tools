# MTL 阿里推送使用手册

<a name="XeEzC"></a>
## 一、简介
阿里移动推送（Alibaba Cloud Mobile Push）是基于大数据的移动智能推送服务，帮助App快速集成移动推送的功能，在实现高效、精确、实时的移动推送的同时，极大地降低了开发成本。<br />基于上述优点，MTL将阿里移动推送封装成了MTL插件，以方便广大MTL开发者使用。

二、集成准备<br />打开阿里云移动研发平台[EMAS控制台](https://emas.console.aliyun.com/?spm=a2c4g.11186623.2.11.3f0c12a6WwGhzM)，进行后面的操作。
<a name="M1aQd"></a>
### 2.1 创建产品
 移动服务当前创建应用，需要两步：<br />(1).添加产品（产品是一个集合的概念，产品下包含iOS应用、Android应用）；<br />(2).点击页面中的“新建产品”按钮，即可创建一个新的产品，如图所示：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568270539585-1a559680-5d27-4703-ad42-dee4f08a4f20.png#align=left&display=inline&height=386&name=image.png&originHeight=772&originWidth=1878&size=126510&status=done&width=939)

(3).输入产品的基本信息创建App时需要输入产品的名称，上传产品图标，选择产品分类。<br />(4).App创建成功后，产品列表会多出一个产品，之后创建应用。

<a name="4kogc"></a>
### 2.2 创建应用
(1).在产品列表页面，点击已经创建的产品按钮，进入产品管理页面。<br />(2).在产品管理页面，点击添加应用图标，创建应用（Android和iOS需要分别创建）。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568270942632-8e5df6dc-b385-4ae4-b6a9-c7b6b144c218.png#align=left&display=inline&height=329&name=image.png&originHeight=658&originWidth=1794&size=74002&status=done&width=897)<br />(3).填写相关信息，安卓的包名，iOS的bundleId。<br />(4).如果是iOS应用，需要配置推送证书，点击配置图标：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568272065385-2d554528-a571-4ae7-ad11-35166b0df3e7.png#align=left&display=inline&height=173&name=image.png&originHeight=346&originWidth=896&size=39368&status=done&width=448)<br />(5).上传iOS推送证书。[iOS推送证书制作教程](https://help.aliyun.com/document_detail/30071.html)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568272260470-14de7dc3-b087-4ff2-bf22-dd90f33dd35b.png#align=left&display=inline&height=683&name=image.png&originHeight=1366&originWidth=1186&size=149522&status=done&width=593)<br />(5).至此，应用创建完成，在后续使用MTL插件时，需要用到此处创建应用的AppKey和AppSecret。

<a name="YTo3Q"></a>
### 三、开始使用
<a name="m2cgo"></a>
### 3.1 添加阿里推送插件
(1).在工程根目录下(即project.json所在目录)，使用mtl命令(mtl add-plugin)添加推送插件，如图所示：![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568613632851-1015d4a0-3f25-432e-8a40-65cfaade9c63.png#align=left&display=inline&height=226&name=image.png&originHeight=452&originWidth=1138&size=235985&status=done&width=569)<br />上下选择需要添加的插件，然后按"空格"选定，插件列表前方的○变为绿色即为选择状态，可多选。

(2).修改project.json文件，添加在2.2节申请的appKey和appSecret，安卓需要额外添加channelId，如图所示：![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568614201039-8f2cef72-3c7c-4ce7-95a3-061a0ac45f7e.png#align=left&display=inline&height=348&name=image.png&originHeight=696&originWidth=1614&size=138651&status=done&width=807)
channelId为通知渠道的id，在Android8.0及以上需要配置，否则通知栏将不显示收到的通知消息。使用阿里云控制台推送通知时，需要设置 “高级设置”，在最下面的 “Android8.0 特殊配置:” ，填写 “通知通道：”，也就是上述客户端注册的channelId。利用OpenApi推送时，服务端需指定其channelId。
<br />
更多关于channelId请参考[这篇文章](https://helpcdn.aliyun.com/knowledge_detail/67398.html)
<a name="qhIL6"></a>
### 3.2 添加推送关键代码
阿里推送平台提供消息和通知两种推送服务：<br />通知：会自动在手机端弹窗，用户可以执行打开或者清除通知的操作。<br />消息：发送后不会在系统通知栏弹窗 ，需要自定义—> 样式和打开方式。<br />[查看消息和通知的区别](https://help.aliyun.com/knowledge_detail/55174.html?spm=a2c4g.11186631.2.11.420eb068OEwPZZ)<br />基于阿里推送平台的特点，MTL提供了两个方法分别获取消息和通知的内容。

(1).引入aliyunpush.js(路径根据自己工程目录而定)，代码如下：

```javascript
<script src="../refs/mtl/aliyunpush.js"></script>
```
(2).注册推送通知监听，通过mtl.aliPush.receivePush()方法，开发者可以注册一个推送通知的监听，当用户点击通知栏中的推送通知，会打开app，通知内容可以在监听方法中拿到，开发者可以根据通知内容进行逻辑处理。
```javascript
mtl.aliPush.receivePush({
		success: function (res) {
			alert(JSON.stringify(res));
		}
});
```

(3).获取消息数据，通过mtl.aliPush.getOffLinePush()方法，开发者可以获取当前设备收到的消息。
```javascript
mtl.aliPush.getOffLinePush({
		success: function (res) {
			alert(JSON.stringify(res));
		}
});
```

<a name="JfY93"></a>
## 四、控制台推送消息&通知至客户端
(1).通知，如图所示：![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568686201285-04795ea4-16dd-4e5e-b87b-949c85bb07fd.png#align=left&display=inline&height=600&name=image.png&originHeight=1200&originWidth=1720&size=127848&status=done&width=860)<br />(2).消息，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568686374735-feb10303-b98c-4378-8bfd-102a0e44fea0.png#align=left&display=inline&height=574&name=image.png&originHeight=1148&originWidth=1134&size=105549&status=done&width=567)<br />如果是开发自己的服务器发送通知&消息，请参考[相关API](https://help.aliyun.com/document_detail/48038.html?spm=5176.13140723.0.0.2a2c1cc9K4tA4i)
