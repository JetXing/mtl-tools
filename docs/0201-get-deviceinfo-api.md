# 设备信息

<a name="MTL_platform" class="anchor"></a>

### platform

获取当前运行平台

<br>

**示例**
```javascript
var platform = mtl.platform;	// 获取当前运行平台，wx|ios|android|h5|dd|upesn
```

---


<a name="MTL_getNetworkType" class="anchor"></a>

### getNetworkType

获取网络状态  

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

<br>

-无-    

<br>

**成功回调返回**

| **字段** | **类型** | **说明** |
| :--- | :--- | :--- |
| networkType | string | 返回网络类型，fail|2g|3g|4g|wifi |


**示例**
```javascript
mtl.getNetworkType({
  success: function(res) {
    var networkType = res.networkType;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

