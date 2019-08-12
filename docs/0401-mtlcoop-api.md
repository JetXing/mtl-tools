# 多端协同

> 待添加：Demo 下载地址。


<a name="MTL_coopInitialize" class="anchor"></a>
#### 1. 初始化

```javascript
mtl.coop.initialize({
  server: "",                 // 长连接地址(必填)
  restServer: "",             // 短连接地址(必填)
  resourceUploadServer: "",   // 资源上传服务器地址(可选)
  resourceDownloadServer: "", // 资源下载服务器地址(可选)
  serverPort: 25225,          // 服务器端口(必填)
  serverSSLPort: 25223,       // SSL端口(必填)
  wssPort: 25227,             // websocket 端口(必填)
  serverEnableSSL: true,      // 是否开启SSL端口(可选), 默认 true
  serverHttps: true,          // 是否是https(可选)，默认 true
  appId: "",                  // 应用ID(必填)
  etpId: "",                  // 租户ID(必填)
  appSecret: "",              // 应用密钥(必填)
});
```

<a name="MTL_coopLogin" class="anchor"></a>
#### 2. 登录

```javascript
mtl.coop.login({
  userId: "", // 用户名
  password: "", // 密码
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopLogout" class="anchor"></a>
#### 3. 退出登录

```javascript
mtl.coop.logout();
```

<a name="MTL_coopGetOpenId" class="anchor"></a>
#### 4. 获取当前设备的 openId

```javascript
mtl.coop.getOpenId({
  success: function(res) {
    var openId = res.openId; // openId
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopGetDeviceInfo" class="anchor"></a>
#### 5. 获取 openId 对应设备的相关信息

```javascript
mtl.coop.getDeviceInfo({
  openId: "", // 设备的 openId
  success: function(res) {
    var appId = res.appId; // 应用ID
    var permissions = res.permissions; // 权限信息
    var userId = res.userId; // 用户ID
    var clientIdentify = res.clientIdentify; // 设备ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopRequestAccessTo" class="anchor"></a>
#### 6. 请求对方设备访问权限

```javascript
mtl.coop.requestAccessTo({
  appId: "", // 应用ID
  userId: "", // 用户ID
  clientIdentify: "", // 设备ID
  permissions: [], // 需要请求的权限列表
  allPermissions: true, // 是否请求所有权限，如果 false 则需要在 permissions 中添加权限列表
  onResponse: function(res) {
    // 收到授权处理结果
    var code = res.code;
    if (code == 0) {
      // 对方同意授权
      var from = res.from;
      var clientIdentify = from.clientIdentify; // 设备ID
      var appId = from.appId; // 应用ID
      var userId = from.userId; // 用户ID
    } else {
      var message = res.message; // 错误信息，对方拒绝或其它原因。
    }
  },
  success: function(res) {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```
> 改动: 新增 onResponse 字段


<a name="MTL_coopReceiveAccessRequest" class="anchor"></a>
#### 7. 接收到设备访问权限请求

```javascript
mtl.coop.receiveAccessRequest(function(res) {
  var commandId = res.commandId; // 指令ID
  var from = res.from; // 申请者的用户信息
  var clientIdentify = from.clientIdentify; // 设备ID
  var appId = from.appId; // 应用ID
  var userId = from.userId; // 用户ID
  var commandParams = res.commandParams;
  var allPermissions = commandParams.allPermissions; // 是否请求所有权限，0：代表申请的全部权限。
  var permissions = commandParams.permissions; // 对方请求的权限列表
});
```

<a name="MTL_coopAgreeAccessRequest" class="anchor"></a>
#### 8. 同意设备访问权限请求

```javascript
// 参数从接口 receiveAccessRequest 中获取。
mtl.coop.agreeAccessRequest({
  commandId: "", // 指令ID
  to: {
    userId: "", // 用户ID
    appId: "", // 应用ID
    clientIdentify: "" // 设备ID
  },
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopRejectAccessRequest" class="anchor"></a>
#### 9. 拒绝设备访问权限请求

```javascript
// 参数从接口 receiveAccessRequest 中获取。
mtl.coop.rejectAccessRequest({
  commandId: "", // 指令ID
  to: {
    userId: "", // 用户ID
    appId: "", // 应用ID
    clientIdentify: "" // 设备ID
  },
  success: function(res) {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopGetMyDevices" class="anchor"></a>
#### 10 .获取我的设备列表

```javascript
mtl.coop.getMyDevices({
  success: function(res) {
    var device = res[0];
    var appId = device.appId; // 应用ID
    var clientIdentify = device.clientIdentify; // 设备ID
    var deviceModel = device.deviceModel; // 设备型号
    var deviceName = device.deviceName; // 设备名称
    var online = device.online; // 是否在线
    var userId = device.userId; // 用户ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopGetAuthorizedDevices" class="anchor"></a>
#### 11. 获取我授权的设备列表

```javascript
mtl.coop.getAuthorizedDevices({
  success: function(res) {
    var device = res[0];
    var appId = device.appId; // 应用ID
    var clientIdentify = device.clientIdentify; // 设备ID
    var deviceModel = device.deviceModel; // 设备型号
    var deviceName = device.deviceName; // 设备名称
    var online = device.online; // 是否在线
    var userId = device.userId; // 用户ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopGetAccessibleDevices" class="anchor"></a>
#### 12. 获取授权给我的设备列表

```javascript
mtl.coop.getAccessibleDevices({
  success: function(res) {
    var device = res[0];
    var appId = device.appId; // 应用ID
    var clientIdentify = device.clientIdentify; // 设备ID
    var deviceModel = device.deviceModel; // 设备型号
    var deviceName = device.deviceName; // 设备名称
    var online = device.online; // 是否在线
    var userId = device.userId; // 用户ID
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopGetAllDevices" class="anchor"></a>
#### 13. 获取所有设备列表（授权+被授权）

```javascript
mtl.coop.getAllDevices({
  success: function(res) {
    var authorizedDevices = res.authorizedDevices;
    var accessibleDevices = res.accessibleDevices;
    // authorizedDevices、accessibleDevices 都是数组，内部元素数据格式见接口（10.获取我的设备列表）
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopRemoveAuthorizedDevice" class="anchor"></a>
#### 14. 移除我授权的设备

```javascript
mtl.coop.removeAuthorizedDevice({
  clientIdentify: "", // 设备ID
  appId: "", // 应用ID
  userId: "", // 用户ID
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopRemoveAccessibleDevice" class="anchor"></a>
#### 15. 移除授权给我设备

```javascript
mtl.coop.removeAccessibleDevice({
  clientIdentify: "", // 设备ID
  appId: "", // 应用ID
  userId: "", // 用户ID
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopRemoveMyDevice" class="anchor"></a>
#### 16. 移除我的设备

```javascript
mtl.coop.removeMyDevice({
  clientIdentify: "", // 设备ID
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopSendCommand" class="anchor"></a>
#### 17. 发送指令

```javascript
mtl.coop.sendCommand({
  commandType: "", // 指令类型，用户可自定义
  to: {
    userId: "", // 用户ID
    appId: "", // 应用ID
    clientIdentify: "" // 设备ID
  },
  commandParams: {}, // 指令携带数据，用户可自定义
  onResponse: function(res) {
    var commandId = res.commandId; // 消息指令ID
    var commandParams = res.commandParams; // 指令数据
    var commandType = res.commandType; // 指令类型
    var from = res.from; // 设备信息
    var userId = from.userId; // 用户ID
    var appId = from.appId; // 应用ID
    var clientIdentify = from.clientIdentify; // 设备ID
  },
  success: function() {
    // 指令发送成功
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

<a name="MTL_coopReceiveCommand" class="anchor"></a>
#### 18. 接收指令

```javascript
mtl.coop.receiveCommand(function(cmd) {
  var commandId = cmd.commandId; // 消息指令ID
  var commandParams = cmd.commandParams; // 指令携带数据
  var commandType = cmd.commandType; // 指令类型
  var from = cmd.from; // 设备信息
  var userId = from.userId; // 用户ID
  var appId = from.appId; // 应用ID
  var clientIdentify = from.clientIdentify; // 设备ID
});
```

<a name="MTL_coopReplyCommand" class="anchor"></a>
#### 19. 回复指令

```javascript
mtl.coop.replyCommand({
  commandId: "", // 要回复的那条指令的ID
  commandParams: {}, // 指令携带数据，用户可自定义。
  to: {
    userId: "", // 用户ID
    appId: "", // 应用ID
    clientIdentify: "" // 设备ID
  },
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

