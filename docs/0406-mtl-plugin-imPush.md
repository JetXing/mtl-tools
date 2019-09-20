# MTL IM消息推送使用手册

<a name="EsvaX"></a>
## 一、简介
MTL远程推送插件是一款为app开发者提供推送技术服务的轻量级插件。支持Android和iOS平台，插件集成简单，支持WEB和API的方式，高并发高吞吐，稳定高效无延时。有效提高产品活跃度，增加用户存留率。

<a name="yhKAg"></a>
## [](https://www.yuque.com/tiantanggebi/dqwpex/zvq6pi#yhKAg)二、集成准备
<a name="D3nD1"></a>
### 2.1 注册开发者账号
在用友IM官网 [https://im.yonyou.com/](https://euc.yonyoucloud.com/cas/login?sysid=imyonyou&service=https%3A%2F%2Fim.yonyou.com%2Fcontroller%2Findex) 点击“注册”，请按界面流程提示进行开发者账号注册。

<a name="zKymW"></a>
### 2.2 创建应用
使用开发者账号登录到管理后台。 点击左侧“新增应用”，输入应用信息即可创建，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567653278536-430948fe-82cd-4327-ab39-3e1689eea1a4.png#align=left&display=inline&height=451&name=image.png&originHeight=902&originWidth=3122&size=181032&status=done&width=1561)

在应用概况中可以查看应用的信息，我们会在插件初始化时使用到“应用ID”和“企业ID”<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567661639590-dbc06eb9-53b1-4bf6-abdf-78088e266675.png#align=left&display=inline&height=538&name=image.png&originHeight=1076&originWidth=3052&size=161964&status=done&width=1526)

<a name="exsNs"></a>
### 2.3 推送证书上传
(1).如果使用iOS推送功能，在后台上传推送证书，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567662483513-e56d2a95-0f3e-437e-9b37-a0aaaca16f81.png#align=left&display=inline&height=460&name=image.png&originHeight=920&originWidth=2144&size=157668&status=done&width=1072)

iOS推送证书是一个后缀为.p12的文件，需要为p12证书设置一个证书名称，输入正确的密码，同样，推送证书的名称在插件初始化时会用到。<br />[点击查看iOS推送证书制作教程](https://www.jianshu.com/p/2777e3cf6bf8)

(2).安卓的离线推送服务，目前支持华为、小米、魅族的手机，在各厂商的推送服务官网申请与包名对应的appid和appkey，然后配置到后台即可。如图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567669982648-10a0092e-663e-4c97-bcd4-ea099279b387.png#align=left&display=inline&height=524&name=image.png&originHeight=1048&originWidth=2192&size=240728&status=done&width=1096)<br />[华为推送服务](https://developer.huawei.com/consumer/cn/service/hms/pushservice.html)<br />[小米推送服务](https://dev.mi.com/console/appservice/push.html)<br />[魅族推送服务](https://open.flyme.cn/open-web/views/push.html)

<a name="BOB0s"></a>
## 三、开始使用
<a name="v4Jwe"></a>
### 3.1 添加推送插件
(1).在工程根目录下(即project.json所在目录)，使用mtl命令(mtl add-plugin)添加推送插件，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567825480901-030e5fc5-15fe-48da-9cd4-2fd4f9c685f7.png#align=left&display=inline&height=188&name=image.png&originHeight=376&originWidth=1130&size=190479&status=done&width=565)<br />上下选择需要添加的插件，然后按"空格"选定，插件列表前方的○变为绿色即为选择状态，可多选。

(2).也可以直接修改project.json文件，添加推送插件，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567825971721-ae2b9f8c-9746-41fb-bb64-366a0eebcbbe.png#align=left&display=inline&height=264&name=image.png&originHeight=528&originWidth=1536&size=100053&status=done&width=768)

<a name="qhIL6"></a>
### 3.2 添加推送关键代码
(1).在合适的时机(一般为页面初始化完成后)调用推送的初始化方法，此处用到了2.2节创建的appId、etpId、clientId、clientSecret以及2.3节添加的推送证书名称。

```javascript
mtl.push.initialize({
		server: 'stellar.yyuap.com',//长连接地址，固定
		restServer: 'im.yyuap.com',//短连接地址，固定
		serverPort: 5227,//服务器端口，固定
		serverSSLPort: 5223,//SSL端口，固定
		serverEnableSSL: true,//是否开启SSL端口
		serverHttps: true,//是否是https
		appId: 'pushdemo',//应用ID
		etpId: 'yonyou',//企业ID
		apnsCerName:'preview_dev',//后台上传的推送证书名称
		clientId:"ceadbd08000b66ebebc9a34944daddae",                // IM后台申请的clientId
  		clientSecret:"B36BB333DBE101719C40FDE9E7C118A5"				// IM后台申请的clientSecret
	});
```

(2).调用登录方法，登录成功后即可使用后台推送服务，客户端会收到推送消息，代码如下：

```javascript
mtl.push.login({
		userId: 'hb',//用户ID
		password: '1234',//密码
		success: function (res) {
			alert('登录成功');
		}
	 });
```
此处用到的userId，来源于控制台的用户管理，由于password在创建用户时是选填项，因此没有密码可不填。
![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1568875249650-957ca940-9a41-403a-87bf-ab29542a7b0e.png?x-oss-process=image/resize,w_1492)

<a name="JfY93"></a>
## 四、使用后台推送消息至客户端
<a name="te48G"></a>
### 4.1 创建公共账号
创建一个公共账号，填写必要信息，类型选择广播号，如下图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567840064228-0fc8aa12-d48e-4717-ae70-236fcef706c5.png#align=left&display=inline&height=446&name=image.png&originHeight=892&originWidth=2142&size=148582&status=done&width=1071)

<a name="S31zJ"></a>
### 4.2 向客户端推送消息
(1).点击公共账号的操作按钮，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567840252613-d69acfa2-6563-4358-838b-f620d18c0cca.png#align=left&display=inline&height=207&name=image.png&originHeight=414&originWidth=2318&size=62536&status=done&width=1159)

(2).输入需要推送给客户端的消息内容即可<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1567840312810-e4ed0e68-6708-4dbe-96cb-99804b4f5d59.png#align=left&display=inline&height=329&name=image.png&originHeight=658&originWidth=1190&size=63306&status=done&width=595)
