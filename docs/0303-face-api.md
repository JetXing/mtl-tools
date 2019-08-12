# 人脸识别

<a name="MTL_initFace" class="anchor"></a>
### initFace
初始化配置

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
|  |  |  |  |


**示例**
```javascript
mtl.initFace({
  licenseIdIos:'',// iOS licenseID
  licenseIdAndroid:'',// 安卓licenseID
  baseUrl:'',//  路径
  pubKey:'' // 公钥
});
```

---


<a name="MTL_faceRegister" class="anchor"></a>
### faceRegister
为指定用户创建人脸信息。

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| userId | string | 是 | 友户通ID  |
| tenantId | string | 是 | 租户ID |
| groupId | string | 是 | 组ID |
| userInfo | string | 是 | 用户信息 |
| sysId | string | 是 | 租户下，区分业务系统（如：人脸签到，人脸认证） |


**示例**
```javascript
mtl.faceRegister({
  userId: "",
  tenantId: "",
  groupId: "",
  userInfo: "",
  sysId: "",
  success: function(res) {
    var status = res.status;
    var log_id = res.log_id;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_faceVerify" class="anchor"></a>
### faceVerify
验证人脸是否指定用户。

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| userId | string | 是 | 友户通ID  |
| tenantId | string | 是 | 租户ID |
| groupId | string | 是 | 组ID |
| userInfo | string | 是 | 用户信息 |
| sysId | string | 是 | 租户下，区分业务系统（如：人脸签到，人脸认证） |
| userId | string | 是 | 友户通ID  |


**示例**
```javascript
mtl.faceVerify({
  userId: "", // 友户通ID
  tenantId: "", // 租户ID
  groupId: "", // 组ID
  userInfo: "", //用户信息
  sysId: "", //租户下，区分业务系统（如：人脸签到，人脸认证）
  success: function(res) {
    var status = res.status; //
    var log_id = res.log_id; //
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```


