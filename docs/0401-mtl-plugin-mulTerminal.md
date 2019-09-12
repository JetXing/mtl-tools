# 多端协同
插件名称: mtl-plugin-terminal
### 简介
> 同时登录多个设备，通过PC可以操作手机进行拍照、定位，并把照片回传到PC端，同时还支持PC端、iPad端、TV端和手机端互相进行通信，创新产品，新一代的人机交互方式。

### 参数说明
无

### 功能 ([详细API](http://mtlapidocs201908061404.test.app.yyuap.com/0401-mtlcoop-api))
方法 | 功能
---|---
initialize | 初始化
login | 登录
logout | 退出登录
getOpenId | 获取当前设备的 openId
getDeviceInfo | 获取 openId 对应设备的相关信息
requestAccessTo | 请求对方设备访问权限
receiveAccessRequest | 接收到设备访问权限请求
agreeAccessRequest | 同意设备访问权限请求
rejectAccessRequest | 拒绝设备访问权限请求
getMyDevices | 获取我的设备列表
getAuthorizedDevices | 获取我授权的设备列表
getAllDevices | 获取所有设备列表（授权+被授权）
removeAuthorizedDevice | 移除我授权的设备
removeAccessibleDevice | 移除授权给我设备
removeMyDevice | 移除我的设备
sendCommand | 发送指令
receiveCommand | 接收指令监听
replyCommand | 回复指令
