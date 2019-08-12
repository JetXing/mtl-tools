# 音频接口

<a name="MTL_startRecord"  class="anchor"></a>
### startRecord
开始录音

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**<br />-无-

<br>

**示例**
```javascript
mtl.startRecord({
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_stopRecord" class="anchor"></a>
### stopRecord
结束录音

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**<br />-无-

<br>

**示例**
```javascript
mtl.stopRecord({
  success: function(res) {
    var localId = res.localId; // 音频的本地ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_onVoiceRecordEnd" class="anchor"></a>
### onVoiceRecordEnd
监听录音自动停止，录音时间超过一分钟没有停止的时候会执行 complete 回调

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**<br />-无-

<br>

**示例**
```javascript
mtl.onVoiceRecordEnd({
  success: function(res) {
    var localId = res.localId; // 返回音频的本地ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_playVoice" class="anchor"></a>
### playVoice
播放录音

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 需要播放的音频的本地ID，由 stopRecord 接口获得 |


**示例**
```javascript
mtl.playVoice({
  localId: "",
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_pauseVoice" class="anchor"></a>
### pauseVoice
暂停播放录音

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 需要暂停的音频的本地ID，由 stopRecord 接口获得 |


**示例**
```javascript
mtl.pauseVoice({
  localId: "",
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_stopVoice" class="anchor"></a>
### stopVoice
结束播放

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 需要停止的音频的本地ID，由 stopRecord 接口获得 |


**示例**
```javascript
mtl.stopVoice({
  localId: "",
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_onVoicePlayEnd" class="anchor"></a>
### onVoicePlayEnd
监听录音播放完毕

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**<br />-无-<br />**<br />**示例**
```javascript
mtl.onVoicePlayEnd({
  success: function(res) {
    var localId = res.localId; // 返回音频的本地ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---

<a name="MTL_uploadVoice" class="anchor"></a>
### uploadVoice
上传录音

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 需要上传的音频的本地ID，由 stopRecord 接口获得 |
| isShowProgressTips | string | 否 | 默认为1，显示加载框提示 |


**示例**
```javascript
mtl.uploadVoice({
  localId: "",
  isShowProgressTips: 1,
  success: function(res) {
    var serverId = res.serverId; // 返回音频的服务器端ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_downloadVoice" class="anchor"></a>
### downloadVoice
下载录音

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| serverId | string | 是 | 需要下载的音频的服务器端ID，由 uploadVoice 接口获得 |
| isShowProgressTips | string | 否 | 默认为1，显示加载框提示 |


**示例**
```javascript
mtl.downloadVoice({
  serverId: "",
  isShowProgressTips: 1,
  success: function(res) {
    var localId = res.localId; // 返回音频的本地ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```
<a name="Xqi5v"></a>
#### 
