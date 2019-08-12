# 登录认证

> 改动：
> - 去掉统一登录接口，小程序端和原生端使用各自接口
> - 去掉 url 参数，使用 writeConfig 值


> 请先阅读 [MTL 多端登录协议]() 文档

<a name="MTL_ucgLogin" class="anchor"></a>
### login
UCG 用户名密码登录，返回租户列表。

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |


**示例**
```javascript
mtl.ucg.login({
  username: "user1",
  password: "123456",
  success: function(res) {
    // 返回租户列表，数据格式见 "MTL多端登录协议" 。
    let data = res.data;    
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---

<a name="MTL_ucgOauth" class="anchor"></a>
### oauth
UCG 第三方登录（微信、钉钉），返回租户列表。

<br>

**参数**<br />-无-

<br>

**示例**
```javascript
mtl.ucg.oauth({
  success: function(res) {
		// 返回租户列表，数据格式见 "MTL多端登录协议" 。
    let data = res.data;    
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_ucgBindUser" class="anchor"></a>
### oauthBind
UCG 第三方登录绑定，小程序调用 [oauth](#MTL_ucgLogin) 接口返回租户列表，如果目标租户未绑定，则需要调用该接口进行绑定。

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| tenantCode | string | 是 | 租户编码 |
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |
| code | string | 是 | [oauth](#MTL_ucgOauth) 接口返回 token |


**示例**
```javascript
mtl.ucg.bindUser({
  tenantCode: "",
  username: "",
  password: "",
  code: "",
  success: function(res) {
    // 成功回调
    var token = res.data.token;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_ucgGetToken" class="anchor"></a>
### getToken
已绑定用户（调用 [login](#MTL_ucgLogin) 接口返回的租户列表都应该是已绑定的），调用该接口获取 token。

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| tenantCode | string | 是 | 租户编码，从登录接口返回的租户列表中获取 |
| code | string | 是 | [oauth](#MTL_ucgOauth) 或 [login](#MTL_ucgLogin) 接口返回 token |


**示例**
```javascript
mtl.ucg.getToken({
  tenantCode: "",
  code: "",
  success: function(res) {
    // 成功回调
    var token = res.data.token;    
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

