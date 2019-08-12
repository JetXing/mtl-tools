# 图像接口

> 注意：
> 微信上 chooseImage 接口用户点击"取消"不会触发任何回调。

<a name="MTL_chooseImage" class="anchor"></a>
### chooseImage
拍照或从手机相册中选图接口

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| count | number | 否 | 选择图片数量，默认9。 |
| sourceType | Array.<string> | 否 | 可以指定来源是相册还是相机，默认二者都有。 |


**额外参数**<br />仅支持**安卓**平台

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| crop | boolean | 否 | 是否需要裁剪，默认 false |
| maxWidth | number | 否 | 裁剪后图片最大宽度，仅 crop 为 true 且 count = 1 时有效。 |
| maxHeight | number | 否 | 裁剪后图片最大高度，仅 crop 为 true 且 count = 1 时有效。 |
| quality | number | 否 | 压缩率，仅 crop 为 true 且 count = 1 时有效。 |


**示例**
```javascript
mtl.chooseImage({
  count: 1,
  sourceType: ["album", "camera"],
  success: function(res) {
    // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    var localIds = res.localIds; // ['wxLocalResource://imageid123456789', ...]
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_previewImage" class="anchor"></a>
### previewImage
跳转到图片预览界面

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| current | string | 否 | 当前显示图片的 url |
| urls | Array.<string> | 是 | 需要预览的图片 url 列表 |


**示例**
```javascript
mtl.previewImage({
  current: "https://wx2.sinaimg.cn/mw690/70396e5agy1g0leayhrhoj211418gq9q.jpg",
  urls: [
    "https://wx3.sinaimg.cn/mw690/70396e5agy1g0leax4owvj211418gk2j.jpg",
    "https://wx4.sinaimg.cn/mw690/70396e5agy1g0leay2ymtj211418gk11.jpg",
    "https://wx2.sinaimg.cn/mw690/70396e5agy1g0leayhrhoj211418gq9q.jpg",
    "https://wx3.sinaimg.cn/mw690/70396e5agy1g0leazeikxj211418gqdc.jpg"
  ],
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```
<a name="29ae5ef2"></a>
#### 

---


<a name="MTL_uploadImage" class="anchor"></a>
### uploadImage
上传图片接口

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 需要上传的图片的本地ID |
| isShowProgressTips | number | 否 | 默认为1，显示加载框提示 |


**示例**
```javascript
mtl.uploadImage({
  localId: "",
  isShowProgressTips: 1,
  success: function(res) {
    var serverId = res.serverId; // 返回图片的服务器端ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_downloadImage" class="anchor"></a>
### downloadImage
下载图片接口

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| serverId | string | 是 | 需要下载的图片的服务器端ID |
| isShowProgressTips | number | 否 | 默认为1，显示加载框提示 |


**示例**
```javascript
mtl.downloadImage({
  serverId: "",
  isShowProgressTips: 1,
  success: function(res) {
    var localId = res.localId; // 返回图片下载后的本地ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_getLocalImgSrc" class="anchor"></a>
### getLocalImgSrc
获取本地图片 src 接口

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 图片的localID |


**示例**
```javascript
mtl.getLocalImgSrc({
  localId: "",
  success: function(res) {
    // 可以用 img 标签显示
    var src = res.imgSrc;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_getLocalImgData" class="anchor"></a>
### getLocalImgData
获取本地图片 base64 接口

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 图片的localID |


**示例**
```javascript
mtl.getLocalImgData({
  localId: "",
  success: function(res) {
    var localData = res.localData; // localData是图片的base64数据，可以用 img 标签显示
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```
<a name="XK6pA"></a>
#### 

