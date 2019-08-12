# 读写配置

> 提议：
> - writeUCGConfig -> writeConfig
> - defaultTp -> tp
> - 新增 server 字段以替代 host 和 port

<a name="MTL_ucgWriteUCGConfig" class="anchor"></a>
### writeUCGConfig
写入 UCG 配置

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 不同的 appcode 下的配置信息不会互相覆盖 |
| config | object | 是 | 配置信息 |


**config 字段说明**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| host | string | 是 | 服务器 IP 或 域名，也可以是完整的服务器地址 |
| port | string | 是 | 服务器端口号 |
| isHttps | boolean | 否 | 是否开启 HTTPS，默认 false |
| defaultTp | string | 否 | 传输协议，默认 none<br />- none：不加密传输<br />- des：固定密钥传输（兼容，不推荐）<br />- dynamic：动态密钥传输（不使用 Https 时推荐使用）<br /> |
| timeout | number | 否 | 超时时间（单位：毫秒），默认 5 秒 |


**示例**
```javascript
mtl.ucg.writeUCGConfig({
  appCode: "myApp",
  config: {
    host: "10.2.112.58",
    port: "8080",
    isHttps: true,
    defaultTp: "dynamic",
    timeout: 5000
  },
  success: function() {
    // 成功
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---

<a name="MTL_ucgReadUCGConfig" class="anchor"></a>
### readUCGConfig
读取 UCG 配置

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 不同的 appcode 下的配置信息不会互相覆盖。 |


**示例**
```javascript
mtl.ucg.readUCGConfig({
  appCode: "myApp",
  success: function(res) {
    // res 与 writeUCGConfig 接口传入的 config 参数相同。
    var host = res.host;
    var port = res.port;
    // ...
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

