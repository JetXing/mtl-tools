
# 小友-AI智能
插件名称: mtl-plugin-vui
### 简介
> 内置对话式人工智能系统，小友智能终端是基于人工智能技术推出的一款智能应用，他的诞生运用了语音识别、语义分析等等诸多人工智能最新技术。是一款集VUI与GUI交互模式于一体，通过语音录入以及语义分析并结合AI平台，实现了语音拨打电话，创建日程，发送消息，查找联系人，查看业绩快报，查看新闻，多端协同办公等一系列功能。

### 参数说明
参数 | 说明 | 是否必传
---|---|---
APPID | 百度语音识别服务APPID | 是
APIKEY | 百度语音识别服务ApiKey | 是
SECRETKEY | 百度语音识别服务SecretKey | 是

### 功能（[详细API](http://mtlapidocs201908061404.test.app.yyuap.com/0701-vui-api)）
方法 | 功能
---|---
initSpeech | VUI初始化
openSpeechPage | VUI打开小友页面 （目前暂时有原生Window提供）
startSpeechSyn | VUI语音合成
startBatchSpeechSyn | VUI语音批量合成（Android项目字符串大于1024字节需调用该接口合成语音）
stopSpeechSyn | VUI停止语音合成
startSpeechRecog | VUI语音识别
stopSpeechRecog | VUI停止语音识别
releaseSpeech | VUI 释放语音资源
cancelAITask | VUI 取消AI流程
