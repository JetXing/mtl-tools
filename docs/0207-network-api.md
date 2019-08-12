# 网络请求

<a name="MTL_request" class="anchor"></a>
### request
发起网络请求

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| url | string | 是 | 开发者服务器接口地址 |
| params | object | 否 | 请求的参数，会拼接到 URL 上 |
| data | string/object | 否 | 请求的参数，会放置在 body 上 |
| headers | Object | 否 | 设置请求的 headers，`content-type` 默认为 `application/json` |
| method | string | 否 | 默认为 GET |
| responseType | string | 否 | 响应的数据类型，默认为 JSON |
| timeout | number | 否 | 超时时间(单位：ms)，默认为 10,000 |


**示例**
```javascript
mtl.request({
  url: "/user",
  method: "get",
  baseURL: "https://some-domain.com/api/",
  headers: { "X-Requested-With": "XMLHttpRequest" },
  params: {
    ID: 12345
  },
  data: {
    firstName: "Fred"
  },
  timeout: 1000,
  responseType: "json",
  success: function(res) {
    var data = res.data; // 返回数据
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_uploadFile" class="anchor"></a>
### uploadFile
上传文件，仅支持**友空间**平台**。**

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✘ | ✘ | ✔︎ | ✘ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| url | string | 是 | 上传地址 |
| filePath | string | 是 | 本地文件路劲 |


**示例**
```javascript
mtl.uploadFile({
  url: "https://mdoctor.yonyoucloud.com/mtldebugger/mtl/file/uploadToOSS",
  filePath:
    "/storage/emulated/0/netease/cloudmusic/网易云音乐相册/-1049953059.jpg",
  success: function(res) {
    var data = JSON.stringify(res.data); // 返回数据
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```


