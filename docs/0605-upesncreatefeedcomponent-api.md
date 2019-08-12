# 新建发言

<a name="MTL_upesnCreateFeedComponent"  class="anchor"></a>
### createFeedComponent
新建发言，工作圈动态

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| groupId | string |  | 否 | 开放权限(是否能看到这条发言)的团队id |
| groupName | string |  | 否 | 开放权限的团队id的名字 |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |

**返回**

| Status Code | 原因 |
| --- | --- |
| 0 | 成功 |
| 400 | 参数不合法 |


**示例**
```javascript
mtl.upesn.createFeedComponent({
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```

