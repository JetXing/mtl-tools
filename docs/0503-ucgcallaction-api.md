# 服务调用

<a name="MTL_ucgCallAction"  class="anchor"></a>
### callAction
请求 UCG 网关服务接口。

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| url | string | 是 | 业务接口 URL 地址。 |
| method | string | 否 | 请求方法，默认为 POST。 |
| params | object | 否 | 请求的参数，会被拼接在 URL 地址中。 |
| data | object | 否 | 请求的数据，会被放在请求的 body 中。 |
| headers | object | 否 | 请求的 headers，`content-type` 默认为 `application/json`。 |
| config | object | 否 | 服务器配置，字段与 [writeUCGConfig](https://www.yuque.com/mtldev/cp84s4/smb3ck#JQLNN) 接口相同，默认使用 writeUCGConfig 配置。 |


**示例**
```javascript
mtl.ucg.callAction({
  url: "http://domain.com/action",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  params: {},
  data: {},
  config: {},
  complete: function(res) {
    var code = res.code;
    if (code == 200) {
      var data = res.data; // UCG 网关返回的业务数据
    } else {
      var message = res.message; // 错误信息
    }
  }
});
```

