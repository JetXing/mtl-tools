# 钉钉调试

<a name="tFXGW"></a>

<a name="EAhZ5"></a>
## 模拟器调试
<a name="AOxYZ"></a>
### 打开小程序开发者工具，导入项目

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
## 真机预览
<a name="l4Gat"></a>
### 设置安全域名

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
