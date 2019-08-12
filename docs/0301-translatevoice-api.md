# 语音转文字

<a name="MTL_translateVoice" class="anchor"></a>
### translateVoice
配合[录音接口]()使用，将录音识别成文字。

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✘ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| localId | string | 是 | 需要识别的音频的本地Id，由录音相关接口获得 |
| isShowProgressTips | string | 否 | 默认为1，显示加载框提示 |


**示例**
```javascript
mtl.translateVoice({
  localId: "",
  isShowProgressTips: 1,
  success: function(res) {
    var translateResult = res.translateResult; // 语音识别的结果
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_voiceToText" class="anchor"></a>
### voiceToText
打开原生语音转文字界面，包含完整流程，录音->识别。

<br>

> 提议：
> - 修改方法名：voice -> openTranslateVoice。
> - 修改回调属性名：resultText -> translateResult。


**参数**<br />-无-

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✘ | ✘ | ✔︎ | ✘ | ✘ |


**示例**
```javascript
mtl.voiceToText({
  success: function(res) {
    var resultText = res.resultText; // 语音识别的结果
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```


