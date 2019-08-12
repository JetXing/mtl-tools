# 查看人员信息

<a name="MTL_upesnViewUserInfo" class="anchor"></a>
### viewUserInfo
打开人员详情界面

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| memberId | number | 是 | 人员id |
| config | object | 是 | 配置信息 |


**返回**

| Status Code | 原因 |
| --- | --- |
| 0 | 成功 |
| 101 | 无查看权限 |
| 102 | 人员不存在 |
| 400 | 参数不合法 |



**示例**
```javascript
mtl.upesn.viewUserInfo({
  memberId: "176422",
  success: function(res) {
    alert(JSON.stringify(res));
  },
  fail: function(err) {
    alert(JSON.stringify(err));
  },
  complete: function(res) {}
});
```

