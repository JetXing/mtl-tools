# 发起单聊会话

<a name="MTL_upesnOpenChatByUserId" class="anchor"></a>
### openChatByUserId
直接发起和特定人员的单聊会话

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| userType | number | 0 | 否 | 对方用户id的使用类型，0-使用友空间用户id；1-使用友互通用户id |
| userId | string |  | 是 | 对方用户的唯一标示 |


**返回**

| Status Code | 原因 |
| --- | --- |
| 0 | 成功 |
| 400 | 参数不合法 |


**示例**
```javascript
mtl.upesn.openChatByUserId({
  userId: "176422",
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```
