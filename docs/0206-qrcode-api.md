# 二维码

> 注意：
> 微信扫描二维码，点击取消会进入成功回调，返回 undefined。

<a name="MTL_scanQRCode" class="anchor"></a>
### scanQRCode
调起扫一扫

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| scanType | string[] | 否 | 可以指定扫二维码还是一维码，可选值为 qrCode 和 barCode，默认两者都有。 |


**特殊参数**<br />仅支持**微信**平台

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| needResult | number | 否 | 默认为0，扫描结果由微信处理，1则直接返回扫描结果。 |


**示例**
```javascript
mtl.scanQRCode({
  scanType: ["qrCode", "barCode"],
  needResult: 1,
  success: function(res) {
    var result = res.resultStr;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_generateQRCode" class="anchor"></a>
### generateQRCode
生成二维码

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| str | string | 是 | 用于生成二维码的字符串 |
| size | string | 否 | 生成图片大小，默认 100 * 100 |


**示例**
```javascript
mtl.generateQRCode({
  str: "", // 用于生成二维码的字符串
  size: 200, // 生成图片大小，默认 100 * 100
  success: function(res) {
    // imgSrc 为 base64 字符串
    var src = res.imgSrc;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```


